import axios from "axios";
import socketIOClient from "socket.io-client";

const API_URL = 'http://localhost:8000';

const headers = {
    'Content-Type': 'application/json',
}
const socketRef = socketIOClient(API_URL);

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {username, password}, {headers});
        return response.data;
    } catch (error) {
        console.error('Login Error', error);
    }
}

export const registration = async (firstName, lastName, username, password) => {
    try {
        const response = await axios.post(`${API_URL}/registration`, {
            firstName,
            lastName,
            username,
            password
        }, {headers})
        return response.data;
    } catch (error) {
        console.error('Registration Error', error);
    }
}

export const logout = async () => {
    try {
        const newHeader = {...headers, Authorization: localStorage.getItem('token')}
        await axios.post(`${API_URL}/logout`, null, {headers: newHeader});
    } catch (error) {
        console.error('Logout error', error)
    }
}


export const userEmit = (users) => {
    if (users.indexOf(localStorage.getItem('fullName')) === -1) {
        socketRef.emit('joinUser', localStorage.getItem('fullName'));
    }
};

export const userListener = () => {
    return new Promise(resolve => {
        // messages and users listeners
        socketRef.on('joinUser', ({onlineUsers, messages}) => {
            console.log(messages);
            resolve({users: [...onlineUsers], messages: [...messages]});
        });
    });
}

export const messageListener = (messages) => {
    return new Promise(resolve => {
        socketRef.on('sendMessage', (message) => {
            resolve( [...messages, message]);
        });
    });
}

export const sendMessage = (message) => {
    const msg = {
        message,
        userId: localStorage.getItem('userId'),
        userName: localStorage.getItem('fullName')
    }
    socketRef.emit('sendMessage', msg);
}
