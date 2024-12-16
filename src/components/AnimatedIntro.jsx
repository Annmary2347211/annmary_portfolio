import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

const AnimatedIntro = () => {
  const fullText = "Hello, I am Annmary Baby";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(fullText); // Set the full text immediately
  }, [fullText]);

  return (
    <div className="relative h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200 overflow-hidden">
      {/* Bubbles */}
      <div className="absolute top-10 left-20 w-12 h-12 md:w-16 md:h-16 bg-[#5a57f5] rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-8 h-8 md:w-10 md:h-10 bg-pink-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full opacity-60 animate-bounce delay-75"></div>

      <div className="absolute top-16 right-32 w-12 h-12 md:w-14 md:h-14 bg-indigo-400 rounded-full opacity-60 animate-bounce delay-150"></div>
      <div className="absolute bottom-10 left-36 w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full opacity-40 animate-ping delay-200"></div>
      <div className="absolute top-28 left-60 w-8 h-8 md:w-10 md:h-10 bg-pink-500 rounded-full opacity-70 animate-pulse delay-50"></div>
      <div className="absolute bottom-16 right-40 w-10 h-10 md:w-12 md:h-12 bg-violet-600 rounded-full opacity-50 animate-bounce delay-100"></div>
      <div className="absolute top-10 right-70 w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full opacity-40 animate-ping delay-200"></div>

      {/* Main Content */}
      <div className="text-center z-10 relative">
        <h1
          className="text-2xl  sm:text-3xl md:text-5xl sm:font-extrabold font-extrabold text-[#333] leading-snug min-h-[60px] sm:min-h-[80px] overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-text-reveal"
        >
          {displayedText}
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl text-gray-600">
          Literally a Tech Enthusiast!
        </p>
        {/* Social Links */}
        <div className="mt-4 sm:mt-8 flex justify-center space-x-4 sm:space-x-6">
          <a
            href="https://www.linkedin.com/in/annmary-baby-3a578521b/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FaLinkedin size={24} sm={30} />
          </a>
          <a
            href="https://www.instagram.com/annmarybaby/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-pink-400"
          >
            <FaInstagram size={24} sm={30} />
          </a>
          <a
            href="mailto:greetannmary@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-red-500"
          >
            <FaEnvelope size={24} sm={30} />
          </a>
          <a
            href="https://github.com/Annmary-Baby"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-black"
          >
            <FaGithub size={24} sm={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntro;
