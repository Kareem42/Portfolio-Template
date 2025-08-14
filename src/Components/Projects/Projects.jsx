import React from "react";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";


const projects = [
  // Here you change the details of your projects in the array. Images and links are blank in order for you to add your projects
  {
    title: "Portfolio Website",
    description: "A sleek personal site built with React and Tailwind CSS.",
    image: "",
    link: "",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN application with Stripe integration.",
    image: "",
    link: "",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI built with GPT-4 and Node.js backend.",
    image: "",
    link: "",
    tech: ["OpenAI", "Node.js", "React", "Socket.io"],
  },
  
];

// Styling for the Tech Stacks that were used to for your projects
const TechBadge = ({ tech }) => (
  <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2 backdrop-blur-sm shadow-sm hover:bg-white/30 transition">
    {tech}
  </span>
);

// Header for the Projects component
const Projects = () => {
  return (
    <RevealOnScroll>
      <div
        id="projects"
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-12 lg:px-20 lg:py-16 text-white"
      >
        <h2 className="text-4xl font-extrabold mb-8 md:text-5xl xl:text-6xl text-center">
          Projects
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-200 text-center">
          Here are some of my recent projects showcasing my skills in web development and design.
        </p>

        {/* Grid layout for your projects. As you add to the projects array, the card will render in the page automatically.  */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

// Styling for the cards being used for each project
const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-white w-full max-w-sm"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-white">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-200 mb-4">{project.description}</p>
      <div className="flex flex-wrap">
        {project.tech.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <span className="mt-4 inline-block text-sm text-indigo-300 hover:underline">
        View Project →
      </span>
    </div>
  </a>
);



export default Projects;

