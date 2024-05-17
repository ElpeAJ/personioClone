import React from "react";
import NavBar from "../components/NavBar/NavBar";
import WebDemo from "../components/WebDemo/WebDemo";
import Footer from "../components/Footer/Footer";
import YellowNav from "../components/YellowNav/YellowNav";

export default function PlanPage() {
  return (
    <div>
      <YellowNav />
      <NavBar />
      <WebDemo />
      <Footer />
    </div>
  );
}
