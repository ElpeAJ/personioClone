import React from "react";
import style from "./Newsletter.module.css";
import InputField from "../InputFields/InputFields";
import Button from "../Button/Button";

export default function Newsletter() {
  return (
    <div className={style.wholeform}>
      <h1>
        Get exclusive insights, invites and more with our weekly HR newsletter
      </h1>
      <form>
        <div>
          <InputField
            className={style.input}
            type="email"
            name="Email address"
          />
        </div>
        <Button name="Sign me up" linksto="" />
      </form>
    </div>
  );
}
