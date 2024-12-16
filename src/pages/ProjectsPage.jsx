import React from "react";
import Navbar from "../components/Navbar";

const ProjectCard = ({ subtitle, title, description, bgClass, repoLink }) => {
  return (
    <div
      className={`flex flex-col p-6 ${bgClass} text-white rounded-2xl w-full md:w-[400px] lg:w-[400px]
      shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300`}
    >
      {/* Card Title */}
      <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
      <h3 className="text-l font-bold italic mb-4">{subtitle}</h3>

      {/* Card Description */}
      <ul className="text-sm space-y-2 mb-8">
        {description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      {/* Buttons */}
      <div className="flex justify-between mt-auto">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition"
        >
          Code
        </a>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "TaCa",
      subtitle: "Flutter, Node.js, React.js, MongoDB, Python, Redux",
      description: [
        "Restaurants and Catering services listing/filtering.",
        "AI/ML-based recommendations to users.",
        "Book tables by selecting table layout of a restaurant.",
        "Post restaurant reviews with geotagging.",
        "Restaurant: Manage dynamic table layouts, bookings, menus.",
      ],
      bgClass: "bg-blue-800",
      repoLink: "https://github.com/Annmary2347211/TaCa_Restaurant_side", // Replace with your GitHub link
    },
    {
      title: "CampusEventPro",
      subtitle: "React Native ,Firebase ,API’s",
      description: [
        "Planning and execution of campus events",
        "Implemented a user-friendly interface to assign tasks.",
        "Developed an enhanced communication channel for planning and tracking the tasks.",
        "Real-time event venue tracking",
      ],
      bgClass: "bg-blue-800",
      repoLink: "https://github.com/Annmary-Baby/CampusEventPro-Project",
    },
    {
      title: "PlateMatch",
      subtitle: "Python, Streamlit, EasyOCR, NLP, Tesseract",
      description: [
        "The project identifies the type of vehicle (e.g., car, truck, bike) from an image using computer vision techniques.",
        "It extracts the number plate, recognizes the alphanumeric characters, and matches them against a predefined database.",
        "The solution leverages machine learning models for accurate vehicle and plate detection.",
        "This system is ideal for traffic monitoring, parking systems, and vehicle security applications.",
      ],
      bgClass: "bg-blue-800",
      repoLink: "https://github.com/Annmary2347211/CV_Hackathon",
    },
    {
      title: "TextSnip",
      subtitle: "Python, Streamlit, EasyOCR, NLP",
      description: [
        "Text Extraction from Images.",
        "Involves text analysis, Paragraph or Sentence Maker.",
        "Users can upload an image containing text and the app will extract the text from the image.",
        "Provide visual insights through graphs.",
      ],
      bgClass: "bg-blue-800",
      repoLink: "https://github.com/Annmary-Baby/ESEIII",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 h-full min-h-screen">
      <Navbar />
      <div className="px-12 py-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Projects</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              bgClass={project.bgClass}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
