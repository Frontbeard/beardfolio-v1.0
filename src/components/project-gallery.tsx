import { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import beardfolio from "../assets/beardfolio.png";
import beardfolioV1 from "../assets/beardfoliov1.0.png";
import realchat from "../assets/realchat.png";
import calculator from "../assets/calculator.png";
import lrstudio from "../assets/lrstudio.png";


interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

const projects: Project[] = [
  {
    title: "My Portfolio v0",
    description: "The first version of my portfolio. Here, you’ll find some details about me, my experience, and projects.",
    technologies: ["React", "Vite", "JavaScript"],
    imageUrl: beardfolio,
    liveUrl: "https://beardfolio.vercel.app/",
    githubUrl: "https://github.com/Frontbeard/beardfolio",
    date: "2024-12-02",
  },
  {
    title: "Beardfolio v1.0",
    description: "A bold beard deserves a bold portfolio with clean, powerful code. This is the latest evolution of my portfolio.",
    technologies: ["React", "Vite", "TypeScript", "ShadCN/UI"],
    imageUrl: beardfolioV1,
    liveUrl: "https://www.frontbeard.xyz/",
    githubUrl: "https://github.com/Frontbeard/beardfolio-v1.0",
    date: "2025-02-20",
  },
  {
    title: "Real-time Chat",
    description: "Real-time chat application where you can join instantly with a nickname, send and view previous messages. Technical test.",
    technologies: ["React", "Node.JS", "Express", "MongoDB"],
    imageUrl: realchat,
    liveUrl: "https://challenge-mern-chat-css-cliente.vercel.app/",
    githubUrl: "https://github.com/Frontbeard/challenge-mern-chat-css",
    date: "2024-03-04",
  },
  {
    title: "Calculator",
    description: "A simple, functional online calculator designed to sharpen my technical skills.",
    technologies: ["JavaScript"],
    imageUrl: calculator,
    liveUrl: "https://frontbeard.github.io/calculator/",
    githubUrl: "https://github.com/Frontbeard/calculator",
    date: "2022-06-21",
  },
  {
    title: "LR Studio",
    description: "A simple, functional online calculator designed to sharpen my technical skills.",
    technologies: ["WordPress"],
    imageUrl: lrstudio,
    liveUrl: "https://leorodriguez.com",
    date: "2024-01-10",
  },
];

export function ProjectGallery() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold dark:text-white">My Projects</h2>
        <div className="relative">
          <select
            className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:border-[#7f4ca5] dark:text-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-[#7f4ca5] text-white rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#7f4ca5] dark:text-[#a67bc5] hover:underline text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#7f4ca5] dark:text-[#a67bc5] hover:underline text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(project.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
