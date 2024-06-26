import React from "react";
import Footer from "../components/Footer/Footer";
import YellowNav from "../components/YellowNav/YellowNav";
import Newsletter from "../components/Newsletter/Newsletter";
import NavBar from "../components/NavBar/NavBar";

export default function LoginPage() {
  return (
    <div>
      <YellowNav />
      <NavBar />
      <Newsletter />
      <Footer />
    </div>
  );
}
