import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contacting from '../../assets/'
import {link} from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="navbar">
        <img src="{logo}" alt="logo" className="logo"  />
        <div className="desktopMenu">
            <link className="desktopMenuListItem">Home</link>
            <link className="desktopMenuListItem">About</link>
            <link className="desktopMenuListItem">Portfolio</link>
            <link className="desktopMenuListItem">Clients</link>

        </div>
        <button className="desktopMenuBtn">
            <img src={contacting} alt="" className="desktopMenuImg" />Contact Me</button>
        
        </nav>
    )
}

export default Navbar;