import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <div>
        <p className={style.Logo}>
          <Link to="/">Personio</Link>
        </p>
      </div>
    </>
  );
}
