import React, { useState } from 'react'
import './NavBar.scss';

function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <div className="container">

                    <img src={"./images/logo.svg"} alt="logo" className="logo-image"></img>
                    

                    <nav class="main-nav">
                        <ul className="primary-nav">
                            <li><a className="link" href="/">Features</a></li>
                            <li><a className="link" href="/">Team</a></li>
                            <li className="sign-in-cta"><a className="link" href="/">Sign In</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default NavBar
