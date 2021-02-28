require('dotenv').config()
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors')
const bodyParser = require('body-parser');
const messageController = require('./controllers/Message');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: '*',
    credentials: false
}

app.use(cors(corsOptions))

require('./routes')(app);
const PORT = process.env.SERVER_PORT || 8001;

const server = http.createServer(app);

const io = socketIO(server, {
    cors: corsOptions
});

const onlineUsers = [];

io.on('connection', socket => {
    socket.on('joinUser', async (fullName) => {
        console.log(onlineUsers)
        if (onlineUsers.indexOf(fullName) === -1) {
            onlineUsers.push(fullName);
        }
        const messages = await messageController.getMessages();
        io.emit('joinUser', {onlineUsers, messages});
    })
    socket.on('sendMessage', async (msg) => {
        let newMsg = await messageController.saveMessage(msg)
        io.emit('sendMessage', newMsg);
    });

})

server.listen(PORT, () => console.log(`The server run on port ${PORT}`));
