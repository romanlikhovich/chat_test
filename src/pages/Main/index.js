import React, {useRef} from "react";
import useChat from "../../hooks/useChat";
import {Layout} from "../../components/Layout";
import {UserList} from "../../components/UserList";
import {Chat} from "../../components/Chat";

export const Main = () => {
    const {messages, sendMessage, users} = useChat();
    const textareaRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(textareaRef.current.value);
        textareaRef.current.value = "";
        textareaRef.current.focus();
    };

    return (
        <Layout>
            <div className="container">
                <div className="p-5">
                    <div className="row">
                        <div className="col-4">
                            <UserList users={users} />
                        </div>
                        <div className="col-8">
                            <Chat
                                messages={messages}
                                handleSubmit={handleSubmit}
                                textareaRef={textareaRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
