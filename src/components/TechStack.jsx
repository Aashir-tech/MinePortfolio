import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3, FaGit } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiPrisma, SiTypescript, SiFigma, SiFirebase } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Prisma", icon: <SiPrisma />, color: "text-black" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
  { name: "Git", icon: <FaGit />, color: "text-red-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
];

const TechStack = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
        Tech Stack
      </h2>
      <p className="text-gray-600 text-center mb-8 transition-colors duration-300 hover:text-black dark:hover:text-white">
        I work with a wide range of in-demand technologies and tools to build modern web applications.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800"
          >
            <div className={`text-4xl ${tech.color} mb-2`}>{tech.icon}</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
