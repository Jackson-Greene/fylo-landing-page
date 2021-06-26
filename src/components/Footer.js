import React, { useState } from 'react'
import './Footer.scss';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    
                    <div className="main-contact">
                        <img src={"./images/logo-light.svg"} alt="logo" className="logo-image"></img>
                        <div className="phone">
                            <img src={"./images/icon-phone.svg"} alt="phone icon"></img>
                            +1-543-123-4567
                        </div>
                        <div className="email">
                            <img src={"./images/icon-email.svg"} alt="email icon"></img>
                            example@fylo.com
                        </div>
                    </div>
                    
                    <div className="primary-links">
                        <ul className="primary-list">
                            <li><a className="link" href="/">About Us</a></li>
                            <li><a className="link" href="/">Jobs</a></li>
                            <li><a className="link" href="/">Press</a></li>
                            <li><a className="link" href="/">Blog</a></li>
                        </ul>
                    </div>
                    

                    <div className="secondary-links">
                        <ul className="secondary-list">
                            <li><a className="link" href="/">Contact Us</a></li>
                            <li><a className="link" href="/">Terms</a></li>
                            <li><a className="link" href="/">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="social-links">
                        <img src={"./images/icon-facebook.svg"} alt="facebook icon"></img>
                        <img src={"./images/icon-twitter.svg"} alt="twitter icon"></img>
                        <img src={"./images/icon-instagram.svg"} alt="instagram icon"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer
