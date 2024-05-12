import React from "react";
import style from "./Button.module.css"

export default function Button(props) {
  return (
    <button className={style.button} type="submit">
      <a href={props.linksto}>{props.name}</a>
    </button>
  );
}
