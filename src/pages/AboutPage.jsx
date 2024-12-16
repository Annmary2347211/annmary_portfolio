import React from "react";
import profileImage from "../assets/Port2.jpg";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-28 py-12 md:py-16">
      {/* Outer Container with White Border */}
      <div className="border-4 border-white rounded-lg bg-gradient-to-r from-blue-100 to-purple-200 p-6">
        {/* Inner Content */}
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-100 to-purple-200 bg-opacity-90 rounded-lg p-4">
          {/* Profile Image Section */}
          <div className="relative flex items-center justify-center w-full md:w-1/3 mb-8 md:mb-0">
            {/* Animated Dotted Rectangle */}
            <div
              className="absolute w-48 h-60 md:w-64 md:h-80 border-2 border-dotted border-[#8990D5] 
              animate-dash bg-gradient-to-r from-transparent to-[#8990D5]"
              style={{
                backgroundSize: "200% 100%",
              }}
            ></div>

            {/* Profile Image */}
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-56 md:w-56 md:h-72 rounded-lg z-10 bg-white shadow-lg"
            />
          </div>

          {/* About Me Text Section */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center md:text-left">
              ABOUT ME
            </h2>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify mb-6">
              Aspiring Full-Stack Developer and AI/ML Enthusiast | Proficient in
              MERN Stack, Statistical Analysis, and Advanced AI Techniques |
              Passionate About Delivering Scalable, Data-Driven Solutions.
              <br />
              <br />
              Dedicated to leveraging advanced technologies like NLP, neural
              networks, and reinforcement learning to tackle real-world
              challenges. Experienced in developing intuitive interfaces and
              robust backend solutions for web and mobile applications.
              Enthusiastic about creating impactful projects that blend
              innovation, functionality, and user experience.
            </p>

            {/* Download Resume Button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="/resume.pdf" // Path to your PDF file
                download="Resume" // Suggested filename when downloading
                className="mt-6 bg-[#d0d6f9] hover:bg-[#aeb8f0] text-[#5a57f5] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
