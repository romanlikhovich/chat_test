import React, {useEffect, useRef} from "react";
import {Layout} from "../../components/Layout";
import {UserList} from "../../components/UserList";
import {Chat} from "../../components/Chat";
import {useDispatch, useSelector} from "react-redux";
import {UserListener, MessageAction, UserAction, MessageListener} from "../../actions";

export const Main = () => {
    const textareaRef = useRef(null);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserListener());
        dispatch(UserAction(state.users))
        dispatch(MessageListener(state.messages));
    }, [state.users, state.messages])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(MessageAction(textareaRef.current.value, state.messages));
        textareaRef.current.value = "";
        textareaRef.current.focus();
    };

    return (
        <Layout>
            <div className="container">
                <div className="p-5">
                    <div className="row">
                        <div className="col-4">
                            <UserList users={state.users}/>
                        </div>
                        <div className="col-8">
                            <Chat
                                messages={state.messages}
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
