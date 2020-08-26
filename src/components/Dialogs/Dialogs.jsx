import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    debugger
    let state = props.dialogsPage;
    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);
    let messageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.NewMessageChange(body);
    };


    let onSendMessageClick = () => {
        props.SendMessageClick()
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