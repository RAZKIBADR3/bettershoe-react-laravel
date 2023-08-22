import React from "react";
import logo from "../storage/logo/whiteLogo-removebg.png";

const Footer = () => {
    return(
        <footer>
            <div className="topSide">
                <div>
                    <h3>sign up to BETTERSHOE</h3>
                    <p className="m-0">stay up to date with the latest shoes, announcement and article.</p>
                </div>
                <div>
                    <div>
                        <input placeholder="Enter your email" type="text" className="form-control" />
                        <button className="btn">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="middleSide">
                <div className="logoP">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div>
                    <nav>
                        <p>about</p>
                        <a href="/">about us</a>
                        <a href="/">features</a>
                        <a href="/">news & blog</a>
                    </nav>
                    <nav>
                        <p>support</p>
                        <a href="/">FAQs</a>
                        <a href="/">support center</a>
                        <a href="/">contact</a>
                    </nav>
                    <nav>
                        <p>contact</p>
                        <a href="mailto:bettershoes.business@gmail.com">
                            <i className="fa-solid fa-envelope"></i>
                            <span>bettershoes@gmail.com</span>
                        </a>
                        <div className="iconsP">
                            <a href="/">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="bottomSide">
                <span>© 2023 bettershoes.com All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;