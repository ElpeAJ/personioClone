import React from "react";
import style from "./YellowNav.module.css";
import { Link } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { RiInformation2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

export default function YellowNav() {
  return (
    <header>
      <div className={style.group}>
        <p>
          <Link to="/create">
            NEW: Create engaging, efficient and insightful employee surverys -
            find out how
          </Link>
        </p>
      </div>
      <div className={`${style.group} ${style.flex}`}>
        <p className={style.borderright}>
          <Link to="/contact">
            <FaRegCommentDots />
            <span>Contact our Sales Team</span>
          </Link>
        </p>
        <p className={style.borderright}>
          <a href="/">
            <HiOutlineGlobeAlt />
            <span>EN</span>
          </a>
        </p>
        <p className={style.borderright}>
          <Link to="/support">
            <RiInformation2Line />
            <span>Support</span>
          </Link>
        </p>
        <p>
          <Link to="/login">
            <IoPersonOutline />
            <span>Login</span>
          </Link>
        </p>
      </div>
    </header>
  );
}
