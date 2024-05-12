import React from "react";
import style from './YellowNav.module.css'
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { RiInformation2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

export default function YellowNav(){
  return (
    <header>
      <div className={style.group}>
        <p>
          <a href="#">
            NEW: Create engaging, efficient and insightful employee surverys -
            find out how
          </a>
        </p>
      </div>
      <div className={`${style.group} ${style.flex}`}>
        <p className={style.borderright}>
          <a href="#">
            <FaRegCommentDots />
            <span>Contact our Sales Team</span>
          </a>
        </p>
        <p className={style.borderright}>
          <a href="#">
            <HiOutlineGlobeAlt />
            <span>EN</span>
          </a>
        </p>
        <p className={style.borderright}>
          <a href="#">
            <RiInformation2Line />
            <span>Support</span>
          </a>
        </p>
        <p>
          <a href="#">
            <IoPersonOutline />
            <span>Login</span>
          </a>
        </p>
      </div>
    </header>
  );
}