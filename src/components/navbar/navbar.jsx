import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

//BEM -> Block Element Modifierrr

const navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />   

                </div>
                <div className="gpt3__navbar-links_container">
                    <p>
                        <a href="#home">Home</a>
                        <a href="#wgpt3">What is GPT3</a>
                        <a href="#possibility">Open IA</a>
                        <a href="#features">Case Studies</a>
                        <a href="#blog">Library</a>
                    </p>

                </div>
                <div className="gpt3__navbar-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>

                </div>
            </div>
        </div>
    )
}

export default navbar
