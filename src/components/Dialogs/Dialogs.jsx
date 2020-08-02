import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElement =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement =
        props.state.messages.map(m => <Message message={m.message}/>);

    let ref = React.createRef();

    let newMessage = () => {
        let text = ref.current.value;
        alert(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
            <div className={'new-massage'}>
                <textarea ref={ref}></textarea>
                <div><button onClick={newMessage}>Enter</button></div>
            </div>
        </div>

    );
};

export default Dialogs;