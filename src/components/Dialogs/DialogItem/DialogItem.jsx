import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <NavLink to={path}>
        <div className={s.item}>{props.name}</div>
    </NavLink>
};


export default DialogItem;