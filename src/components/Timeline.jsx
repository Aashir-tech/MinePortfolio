import React from "react";

const timelineData = [
  {
    year: "2025",
    title: "Full-Stack Development",
    description: "Developed a payment app using the MERN stack for placement.",
    link: "https://paytmlite.vercel.app/", // Add your live deployed link here when available
  },
  {
    year: "2024",
    title: "Blog & E-commerce Projects",
    description: "Built a blog app with Appwrite, a MERN-based e-commerce site, and a Todo web app.",
    link: "https://cureblog.netlify.app/", // Replace with actual deployed link
  },
  {
    year: "2023",
    title: "Frontend Mastery",
    description: "Gained expertise in React, Redux, and component-based UI design.",
    link: "https://minetododev.vercel.app/", // No link needed for learning phase
  },
  {
    year: "2022",
    title: "Started BCA",
    description: "Began my Bachelor's in Computer Applications at Ajeenkya DY Patil University.",
    link: "", // No link needed for education
  },
];

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">My Journey</h2>
      <div className="relative border-l-4 border-blue-500">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
            <h3 className="text-lg font-semibold">{item.year}</h3>
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-gray-600">{item.description}</p>
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
