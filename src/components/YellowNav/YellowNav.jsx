import React from "react";
import style from "./YellowNav.module.css";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { RiInformation2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

export default function YellowNav() {
  return (
    <header>
      <div className={style.group}>
        <p>
          <a href="https://facebook.com">
            NEW: Create engaging, efficient and insightful employee surverys -
            find out how
          </a>
        </p>
      </div>
      <div className={`${style.group} ${style.flex}`}>
        <p className={style.borderright}>
          <a href="https://facebook.com">
            <FaRegCommentDots />
            <span>Contact our Sales Team</span>
          </a>
        </p>
        <p className={style.borderright}>
          <a href="https://facebook.com">
            <HiOutlineGlobeAlt />
            <span>EN</span>
          </a>
        </p>
        <p className={style.borderright}>
          <a href="https://facebook.com">
            <RiInformation2Line />
            <span>Support</span>
          </a>
        </p>
        <p>
          <a href="https://facebook.com">
            <IoPersonOutline />
            <span>Login</span>
          </a>
        </p>
      </div>
    </header>
  );
}
