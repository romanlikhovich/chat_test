require('dotenv').config()
const DB_HOST = process.env.DB_HOST;

const mongoose = require('mongoose');
mongoose.connect(DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const userSchema = new mongoose.Schema({
    username: {type: String, index: true, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String, required: false},
    lastLogin: {type: Date, required: false}
});

module.exports = mongoose.model('User', userSchema);
