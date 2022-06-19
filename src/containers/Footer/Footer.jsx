import React from "react";

import "./Footer.scss";

import githubLogo from "../../assets/images/footer/github-logo.png";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__links">
                <a
                    className="footer__link"
                    href={"https://github.com/GavinStirling"}
                >
                    <img src={githubLogo} alt="Github Logo Link" />
                </a>
                <a
                    className="footer__link"
                    href="https://www.linkedin.com/in/gavin-stirling-646b14146"
                >
                    in
                </a>
                <a className="footer__link" href="/#">
                    CV
                </a>
            </div>
            <p className="footer__rights">All Right's Reserved, 2022</p>
            <p className="footer__email">gavinstir@gmail.com</p>
        </footer>
    );
};

export default Footer;
