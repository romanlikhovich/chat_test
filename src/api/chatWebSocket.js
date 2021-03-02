import socketIOClient from "socket.io-client";

export class ChatWebSocket {
    instance = null;

    constructor(endpoint) {
        if (!this.instance) {
            this.instance = socketIOClient(endpoint);
        }

        return this.instance;
    }
}
