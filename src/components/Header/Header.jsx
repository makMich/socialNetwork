import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/b7/9d/ef/b79defbf3ffcbb6e7bb1cfb2042122fb.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}</div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;