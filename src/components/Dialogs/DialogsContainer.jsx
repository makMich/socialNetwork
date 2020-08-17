import React from 'react';
import s from './Dialogs.module.css'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        NewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        SendMessageClick: () => {
            dispatch(SendMessageCreator())
        }
    }
};

let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;