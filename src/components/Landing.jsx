import NavBar from "./LandingPage.jsx/NavBar";
import Hero from "./LandingPage.jsx/Hero";
import FAQ from "./LandingPage.jsx/faq";
import Login from "./LandingPage.jsx/Login";
import React from "react";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Login />
      <FAQ />
      {/* Additional landing page content can go here */}
    </div>
  );
}
export default LandingPage;