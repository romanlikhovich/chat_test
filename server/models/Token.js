require('dotenv').config()
const DB_HOST = process.env.DB_HOST;

const mongoose = require('mongoose');
mongoose.connect(DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});


const tokenSchema = new mongoose.Schema({
    token: {type: String, required: true},
    userId: {type: mongoose.ObjectId, ref: 'User'},
    isActive: {type: Boolean, default: true},
    timestamp: {type: Date, required: true, default: Date.now()}
});

module.exports = mongoose.model('Token', tokenSchema);
