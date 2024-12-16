import React from "react";
import Navbar from "../components/Navbar";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import AnimatedIntro from "../components/AnimatedIntro";
import Footer from "../components/Footer";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <Navbar />
      <AnimatedIntro />

      {/* About Section */}
      <div id="about" className="h-12 md:h-20"></div>
      <AboutPage />

      {/* Skills Section */}
      <div id="skills" className="h-12 md:h-20"></div>
      <SkillsPage />

      {/* Projects Section */}
      <div id="projects" className="h-12 md:h-20"></div>
      <ProjectsPage />

      {/* Contact Section */}
      <div id="contact" className="h-12 md:h-20"></div>
      <ContactPage />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
