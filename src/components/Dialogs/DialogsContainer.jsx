import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    debugger;
    let state = props.store.getState();
    let dialogElement = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let messageBody = state.dialogsPage.newMessageBody;

    let NewMessageChange = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body));
    };


    let SendMessageClick = () => {
        props.dispatch(SendMessageCreator());
    };


    return (
        <Dialogs NewMessageChange={NewMessageChange} SendMessageClick={SendMessageClick}
                 dialogElement={dialogElement} messageElement={messageElement} messageBody={messageBody}/>
    );
};

export default DialogsContainer;