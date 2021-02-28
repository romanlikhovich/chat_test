import React, {useEffect, useRef} from "react";
import cn from "classnames";
import "./index.scss";

export const Chat = ({messages, textareaRef, handleSubmit}) => {
    const messagesRef = useRef(null);
    const socketUserId = localStorage.getItem("userId");

    useEffect(() => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="chat">
            <div className="chat__messages" ref={messagesRef}>
                {messages &&
                messages.map((m, i) => {
                    const data = new Date(m.timestamp);
                    const localeData = data.toLocaleTimeString();

                    return (
                        <div
                            key={"key_" + i}
                            className={cn(
                                "message",
                                socketUserId === m.userId && "message--right"
                            )}
                        >
                            <div className="message__info">
                                <span>{m.userName}</span>
                                <span>{localeData}</span>
                            </div>
                            <div className="message__text">{m.message}</div>
                        </div>
                    );
                })}
            </div>

            <form onSubmit={handleSubmit} className="chat__form">
                <textarea className="form-control" ref={textareaRef}/>
                <button className="btn btn-primary" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};
