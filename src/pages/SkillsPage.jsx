import React from "react";
import Navbar from "../components/Navbar";

const SkillCard = ({ imageSrc, altText }) => {
  return (
    <div  id="skills" className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md hover:scale-105 p-4 w-32 h-32 hover:shadow-lg transition-transform duration-300">
      {/* Inner Gradient Border */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200 rounded-md w-full h-full p-1">
        {/* Inner Content */}
        <div className="flex flex-col justify-center items-center bg-white rounded-md w-full h-full">
          <img src={imageSrc} alt={altText} className="w-12 h-12 mb-2" />
          <p className="text-sm font-medium text-gray-800">{altText}</p>
        </div>
      </div>
    </div>
  );
};



const SkillsPage = () => {
  const skills = [
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", altText: "JavaScript" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", altText: "React.js" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", altText: "Figma" },
    { imageSrc: "https://www.svgrepo.com/show/452091/python.svg", altText: "Python" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", altText: "Node.js" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", altText: "HTML5" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", altText: "CSS3" },
    { imageSrc: "https://www.svgrepo.com/show/452234/java.svg", altText: "Java" },
    { imageSrc: "https://www.svgrepo.com/show/452238/jb-kotlin.svg", altText: "Kotlin" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", altText: "Git" },
    { imageSrc: "https://www.svgrepo.com/show/354202/postman-icon.svg", altText: "Postman" },
    { imageSrc: "https://www.svgrepo.com/show/303251/mysql-logo.svg", altText: "MySQL" },
    { imageSrc: "https://www.svgrepo.com/show/373845/mongo.svg", altText: "MongoDB" },
    { imageSrc: "https://www.svgrepo.com/show/452092/react.svg", altText: "React Native" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png", altText: "C" },
    { imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png", altText: "c++" },
    { imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWT83LnsKj-IGHzhDpimWpE-Mp_p1jBtSJw&s", altText: "NLP" },
    
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <Navbar />
      <div className="px-12 py-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Skills</h1>
        <div className="flex justify-center gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              imageSrc={skill.imageSrc}
              altText={skill.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
