import React from 'react';

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";



const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt="" />
            <Link to="/">Sajeed Movies</Link>
          </div>
        </div>

        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Terms of Use </Link>
            <Link to="/">About Us</Link>
          </div>

          <div className='footer__content__menu'>
            <Link to="/">Help Center</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookie Preferences</Link>
            <Link to="/">FAQ</Link>

          </div>

          <div className='footer__content__menu'>
            <Link to="/">You Must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Gift cards</Link>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;