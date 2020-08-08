import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
debugger;
    let dialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>);
    let messageBody = props.state.newMessageBody;

    let onNewMessageChange = (e) => {
        debugger;
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    };


    let onSendMessageClick = () => {
        props.dispatch(SendMessageCreator());
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div>
                    <div>
                        <textarea value={messageBody} onChange={onNewMessageChange}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Enter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;