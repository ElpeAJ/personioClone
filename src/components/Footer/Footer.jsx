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
            <a href="#">Personio Foundation</a>
          </p>
          <p>
            <a href="#">Press</a>
          </p>
          <p>
            <a href="#">Personio Green</a>
          </p>
          <p>
            <a href="#">Diversity</a>
          </p>
          <p>
            <a href="#">Sustainability</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Getting Started</h3>
          <p>
            <a href="#">FAQ</a>
          </p>
          <p>
            <a href="#">Security and Trust</a>
          </p>
          <p>
            <a href="#">Implementation Process</a>
          </p>
          <p>
            <a href="#">Partner Program</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Support</h3>
          <p>
            <a href="#">Voyager Community</a>
          </p>
          <p>
            <a href="#">Product Updates</a>
          </p>
          <p>
            <a href="#">Developer Hub</a>
          </p>
          <p>
            <a href="#">Customer Advisory Board</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Legal Links</h3>
          <p>
            <a href="#">General Terms and Conditions</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Cookie Settings</a>
          </p>
          <p>
            <a href="#">Legal Notice</a>
          </p>
          <p>
            <a href="#">Site Map</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Not a Customer yet? Contact Sales</h3>
          <p>
            <a href="#">
              <span className="gb">GB</span> +44 20 3314 4377
            </a>
          </p>
          <p>
            <a href="#">
              <CiMail />
              <span>hello@personio.com</span>
            </a>
          </p>
          <p>
            <a href="#">
              <FaRegComment />
              <span>Contact Form</span>
            </a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Careers at Personio</h3>
          <p>
            <a href="#">Careers</a>
          </p>
        </div>
        <div className={style.group}>
          <h3>Connect</h3>
          <p>
            <a href="#">
              <BiLogoLinkedin />
              <span>LinkedIn</span>
            </a>
          </p>
          <p>
            <a href="#">
              <FaFacebookF />
              <span>Facebook</span>
            </a>
          </p>
          <p>
            <a href="#">
              <IoLogoInstagram />
              <span>Instagram</span>
            </a>
          </p>
          <p>
            <a href="#">
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