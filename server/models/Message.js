require('dotenv').config()
const DB_HOST = process.env.DB_HOST;

const mongoose = require('mongoose');
mongoose.connect(DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const messageSchema = new mongoose.Schema({
    message: {type: String, required: true},
    userId: {type: mongoose.ObjectId, ref: 'User'},
    userName: {type: String},
    timestamp: {type: Date, required: true, default: Date.now()}
});

module.exports = mongoose.model('Message', messageSchema);
