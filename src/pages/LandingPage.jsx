import React from "react";
import { HeroSection, FeatureSection } from "@/components/home";
import AboutSection from "@/components/home/AboutSection";  
import TeamSection from "@/components/home/TeamSection";

const LandingPage = () => {
  return (
    <div className="pt-32 px-6">
      {/* <p className="text-loom-light text-6xl font-mono text-center mb-20">Welcome to LOOM</p> */}
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <TeamSection />
    </div>
  );
};

export default LandingPage;
