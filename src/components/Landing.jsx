import NavBar from "./LandingPage.jsx/NavBar";
import Hero from "./LandingPage.jsx/Hero";
import Login from "./LandingPage.jsx/Login";
import React from "react";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Login />
      {/* Additional landing page content can go here */}
    </div>
  );
}
export default LandingPage;