import NavBar from "./LandingPage.jsx/NavBar";
import Hero from "./LandingPage.jsx/Hero";
import FAQ from "./LandingPage.jsx/faq";
import React from "react";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FAQ />
      {/* Additional landing page content can go here */}
    </div>
  );
}
export default LandingPage;