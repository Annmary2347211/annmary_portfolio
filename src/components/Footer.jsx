import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import logo from "../assets/annlogo.png";

const Footer = () => {
  return (
    <footer
      className="backdrop-blur-3xl bg-white/30 text-gray-600 py-4 px-4 flex justify-between items-center mt-auto border-t border-gray-300 shadow-lg"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // Semi-transparent white
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-2 text-sm">
        <p>Kerala, India</p>
        <a href="mailto:subinchaliyath@gmail.com" className="hover:underline">
          greetannmary@gmail.com
        </a>
        <p>No © issues, 2024</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center">
        {/* Icon and Name */}
        <div className="flex items-center space-x-2">
          <div>
            <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Adjust height as needed */}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-700">Annmary</h3>
            <p className="text-gray-500 text-sm">Full-Stack Developer</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/annmary-baby-3a578521b/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/annmarybaby/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-pink-400"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="greetannmary@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-red-500"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://github.com/Annmary-Baby"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
