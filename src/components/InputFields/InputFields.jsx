import React from "react";
import style from "./InputFields.module.css";

export default function InputField(props) {
  return (
    <input className={style.input} type={props.type} placeholder={props.name} />
  );
}
