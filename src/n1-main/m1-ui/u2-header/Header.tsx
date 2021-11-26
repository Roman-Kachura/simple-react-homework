import React from "react";
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/error'}>Error</NavLink>
            <NavLink to={'/recovery-password'}>Recovery Password</NavLink>
            <NavLink to={'/new-password'}>New Password</NavLink>
            <NavLink to={'/test'}>Test</NavLink>
        </header>
    )
}