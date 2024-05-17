import React from "react";
//import { dataIcons } from "./images.data";

export default function LandingPage() {
  return (
    <div className={style.display}>
      <div>
        <h1>The all-in-one HR software solution</h1>
        <p>Unlock the full potential of your people</p>
        <ul>
          <li>Better employee experience</li>
          <li>Better employee experience</li>
          <li>Better employee experience</li>
          <li>Better employee experience</li>
        </ul>
      </div>
      <div className={style.image}>
        <img
          src="https://images.ctfassets.net/p03bi75xct27/38oPD7zStHCbftjeI5j19X/fb380f68baa36360e4ae2e0aa1a0d743/iStock-618740572_1.png?q=80&fm=webp&w=1536&h=1728&fit=fill&f=center"
          alt="landing"
        ></img>
      </div>
    </div>
  );
}
