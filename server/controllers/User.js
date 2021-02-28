require('dotenv').config()
const User = require('../models/User');
const Token = require('../models/Token');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'secret';
const bcrypt = require('bcryptjs');
const PASSWORD_HASH = process.env.PASSWORD_HASH || '7';
const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN || '24';

/**
 * Login
 * @param req
 * @param res
 */
const login = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({'username': username});
    if (user && bcrypt.compareSync(password, user.password)) {
        const accessToken = jwt.sign({
            username: user.username,
            password: user.password
        }, accessTokenSecret, {expiresIn: `${TOKEN_EXPIRES_IN}h`});

        const token = new Token({token: accessToken, userId: user._id, isActive: true});
        await token.save();
        res.status(200).json({
            token: accessToken,
            expirationToken: Date.now() + (parseInt(TOKEN_EXPIRES_IN) * 3600),
            username: user.username,
            avatar: user.avatar,
            userId: user._id,
            fullName: user.firstName + ' ' + user.lastName
        });
    } else {
        res.status(500).json({code: 500, status: 'error', message: 'Error while login. Check username or password'});
    }

}


/**
 * Register a new user in the database
 * @param req - request
 * @param res - response
 */
const registration = async (req, res) => {
    let {username, password, firstName, lastName} = req.body;
    password = bcrypt.hashSync(password, parseInt(PASSWORD_HASH));
    const user = new User({username, password, firstName, lastName});
    try {
        await user.save();
        res.status(200).json({code: 200, status: 'ok', message: 'The new user created successfully'});
    } catch (error) {
        res.status(500).json({code: 500, status: 'error', message: error.message});
    }
}


const logout = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split("Bearer ");
        const tok = await Token.findOne({token: token});
        console.log(tok);
        tok.isActive = false;
        await tok.save();
        res.status(200).json({code: 200, status: 'ok', message: 'Logout successful'});
    } else {
        res.sendStatus(401).json({code: 401, status: 'unauthorized', message: 'User not authorized'});
    }
}

module.exports = {
    registration,
    login,
    logout
}
