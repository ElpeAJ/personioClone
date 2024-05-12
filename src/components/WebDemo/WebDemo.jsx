import React from "react";
import style from "./WebDemo.module.css"
import DemoForm from "../DemoForm/DemoForm"
import { GiCheckMark } from "react-icons/gi";

export default function WebDemo() {
  return (
    <div className={style.webdemo}>
      <div className={style.personio}>
        <h1>See Personio in action</h1>
        <p>
          Fill in your details to book a demo call with one of our product
          experts.
        </p>
        <p>Here's what to expect:</p>
        <p>
          <GiCheckMark />
          <span>A no-commitment product walkthrough</span>
        </p>
        <p>
          <GiCheckMark />
          <span>A no-commitment product walkthrough</span>
        </p>
        <p>
          <GiCheckMark />
          <span>A no-commitment product walkthrough</span>
        </p>
        <p>Software employees love:</p>
        <div className={style.love}>
          <img
            src="https://images.ctfassets.net/p03bi75xct27/50XTcKri1A5rwXtwmZeRe6/34b16d0b151863916f3a6d80691be1ce/image.png?q=80&fm=webp&w=1536"
            alt="What they love"
          />
        </div>
      </div>
      <DemoForm />
    </div>
  );
}
