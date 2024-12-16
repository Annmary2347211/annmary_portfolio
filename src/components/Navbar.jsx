import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import logo from "../assets/annlogo.png"; // Import your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 py-1 bg-transparent shadow-sm z-50 backdrop-blur-xl">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Adjust height as needed */}
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-8 font-medium text-black">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-[#5a57f5] cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-[#5a57f5] cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-[#5a57f5] cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-[#5a57f5] cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-16 right-5 w-60 bg-gradient-to-r from-blue-100 to-purple-200 shadow-lg text-center z-50 backdrop-blur-3xl font-medium text-black py-4 space-y-4 rounded-lg">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-[#5a57f5] cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-[#5a57f5] cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-[#5a57f5] cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-[#5a57f5] cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
