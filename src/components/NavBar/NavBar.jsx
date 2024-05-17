import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav>
      <ul className={`${style.group} ${style.flex}`}>
        <li className={style.borderright}>
          <Logo className={style.logo} />
        </li>
        <li className={style.borderright}>
          <Link to="/">
            <span>Product</span>
          </Link>
        </li>
        <li className={style.borderright}>
          <a href="/">
            <span>Solutions</span>
          </a>
        </li>
        <li className={style.borderright}>
          <Link to="/plan">
            <span>Plans</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>About Personio</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Resources</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/create">
          <Button linksto="/bookdemo" name="Book your Demo" />
        </Link>
      </div>
    </nav>
  );
}
