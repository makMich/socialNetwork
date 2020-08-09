import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.NewMessageChange(body);
    };


    let onSendMessageClick = () => {
        props.SendMessageClick()
    };

debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogElement}
            </div>
            <div className={s.messages}>
                {props.messageElement}
                <div>
                    <div>
                        <textarea value={props.messageBody} onChange={onNewMessageChange}> </textarea>
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