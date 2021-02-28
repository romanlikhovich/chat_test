import React, {useEffect, useRef, useState} from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:8000";


const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(ENDPOINT);

        socketRef.current.on('sendMessage', (message) => {
            const incomingMessage = message
            setMessages((messages) => [...messages, incomingMessage]);
        });

        if (users.indexOf(localStorage.getItem('fullName')) === -1) {
            console.log('here');
            socketRef.current.emit('joinUser', localStorage.getItem('fullName'));
        }

        socketRef.current.on('joinUser', ({onlineUsers,  messages}) => {
                setUsers([...onlineUsers])
                setMessages([...messages])
        });

        return () => {
            socketRef.current.disconnect();
        };

    });

    const sendMessage = (messageText) => {
        const msg = {
            message: messageText,
            userId: localStorage.getItem('userId'),
            userName: localStorage.getItem('fullName')
        }
        socketRef.current.emit('sendMessage', msg);
    };

    return {messages, sendMessage, users};
};

export default useChat;
