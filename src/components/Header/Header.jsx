import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://im0-tub-ru.yandex.net/i?id=5d9610c3cdebb56618e633c7fa0d0d52-sr&n=13' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout} type={"button"} className={s.LoginButton}>Log out</button> </div>
                : <NavLink className={s.login} to={'/login'}><button type={"button"} className={s.LoginButton}>Login</button></NavLink> }
        </div>
    </header>
}

export default Header;