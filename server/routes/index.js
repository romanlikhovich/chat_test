const userController = require('../controllers/User');
const path = require('path');

module.exports = (app) => {
    app.post('/login', userController.login);
    app.post('/registration', userController.registration);
    app.post('/logout', userController.logout);

    app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname+'/build/index.html'));
    });
}
