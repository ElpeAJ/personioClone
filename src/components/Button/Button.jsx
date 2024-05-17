import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css"

export default function Button(props) {
  return (
    <button className={style.button} type="submit">
      <Link to={props.linksto}>{props.name}</Link>
    </button>
  );
}
