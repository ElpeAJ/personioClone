import React from "react";
import style from './Footer.module.css'
import Logo from "../Logo/Logo";
import { dataIcons } from "./imagedata";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";


export default function Footer(){
  return (
    <footer>
      <div className={style.section}>
        <div className={style.group}>
          <Logo />
          <div className={style.store}>
            <div>
              <img src={dataIcons[0].src} alt="playstore" />
            </div>
            <div>
              <img src={dataIcons[1].src} alt="appstore" />
            </div>
          </div>
        </div>
        <div className={style.group}>
          <h3>Company</h3>
          <p>
            <a href="https://facebook.com">Personio Foundation</a>
          </p>
          <p>
            <a href="https://facebook.com">Press</a>
          </p>
          <p>
            <a href="https://facebook.com">Personio Green</a>
          </p>
          <p>
            <a href="https://facebook.com">Diversity</a>
          </p>
          <p>
            <a href="https://facebook.com">Sustainability</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Getting Started</h3>
          <p>
            <a href="https://facebook.com">FAQ</a>
          </p>
          <p>
            <a href="https://facebook.com">Security and Trust</a>
          </p>
          <p>
            <a href="https://facebook.com">Implementation Process</a>
          </p>
          <p>
            <a href="https://facebook.com">Partner Program</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Support</h3>
          <p>
            <a href="https://facebook.com">Voyager Community</a>
          </p>
          <p>
            <a href="https://facebook.com">Product Updates</a>
          </p>
          <p>
            <a href="https://facebook.com">Developer Hub</a>
          </p>
          <p>
            <a href="https://facebook.com">Customer Advisory Board</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Legal Links</h3>
          <p>
            <a href="https://facebook.com">General Terms and Conditions</a>
          </p>
          <p>
            <a href="https://facebook.com">Privacy Policy</a>
          </p>
          <p>
            <a href="https://facebook.com">Cookie Settings</a>
          </p>
          <p>
            <a href="https://facebook.com">Legal Notice</a>
          </p>
          <p>
            <a href="https://facebook.com">Site Map</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Not a Customer yet? Contact Sales</h3>
          <p>
            <a href="https://facebook.com">
              <span className="gb">GB</span> +44 20 3314 4377
            </a>
          </p>
          <p>
            <a href="https://facebook.com">
              <CiMail />
              <span>hello@personio.com</span>
            </a>
          </p>
          <p>
            <a href="https://facebook.com">
              <FaRegComment />
              <span>Contact Form</span>
            </a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Careers at Personio</h3>
          <p>
            <a href="https://facebook.com">Careers</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Connect</h3>
          <p>
            <a href="https://facebook.com">
              <BiLogoLinkedin />
              <span>LinkedIn</span>
            </a>
          </p>
          <p>
            <a href="https://facebook.com">
              <FaFacebookF />
              <span>Facebook</span>
            </a>
          </p>
          <p>
            <a href="https://facebook.com">
              <IoLogoInstagram />
              <span>Instagram</span>
            </a>
          </p>
          <p>
            <a href="https://facebook.com">
              <FaXTwitter />
              <span>X</span>
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
}