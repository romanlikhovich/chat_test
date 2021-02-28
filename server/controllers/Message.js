require('dotenv').config()
const Message = require('../models/Message');

/**
 * Login
 * message - object with userID, text message and date
 */
const saveMessage = async (msg) => {
    const message = new Message(msg);
    return await message.save();
}

const getMessages = async (limit = 20) => {
    const messages = await Message.find({}).sort({timestamp: -1}).limit(limit);
    messages.reverse();
    return messages;
}

module.exports = {
    saveMessage,
    getMessages
}
