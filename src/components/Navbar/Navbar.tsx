import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import st from "../../MainPage.module.css";

const Navbar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div className={s.item}>
                <a>News in developing</a>
            </div>
            <div className={s.item}>
                <a>Music in developing</a>
            </div>
            <div className={s.item}>
                <a>Settings in developing</a>
            </div>
        </nav>
    )
}

export default Navbar;