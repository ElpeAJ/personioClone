import React from "react";
import WebDemo from "../components/WebDemo/WebDemo";
import Footer from "../components/Footer/Footer";
import YellowNav from "../components/YellowNav/YellowNav";
import NavBar from "../components/NavBar/NavBar";

export default function BookDemoPage() {
  return (
    <div>
      <YellowNav />
      <NavBar/>
      <WebDemo/>
      <Footer />
    </div>
  );
}
