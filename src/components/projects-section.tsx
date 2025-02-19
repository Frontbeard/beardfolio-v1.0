import { Link } from "react-router-dom";

export function ProjectsSection() {
  const projects = [
    {
      title: "Calculator",
      technologies: ["JavaScript"],
    },
    {
      title: "My Portfolio v0",
      technologies: ["React", "Vite", "JavaScript"],
    },
    {
      title: "Beardfolio v1.0",
      technologies: ["React", "Vite", "TypeScript", "ShadCN/UI"],
    },
    {
      title: "Real-time Chat",
      technologies: ["React", "Node.JS", "Express", "MongoDB"],
    },
  ];

  const displayedProjects = projects.slice(0, 4);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 h-[400px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-3 dark:text-white">Featured Projects</h2>
      <div className="space-y-2">
        {displayedProjects.map((project, index) => (
          <Link 
            to="/projects" 
            key={index} 
            className="block bg-white dark:bg-gray-700 rounded-2xl p-2 mb-2 transition-all duration-300 
              hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
              hover:text-white dark:hover:text-white group"
          >
            <h3 className="font-bold text-sm mb-1 group-hover:text-white dark:text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300 
                    group-hover:bg-white group-hover:text-[#7f4ca5] text-xs px-2 py-0.5 rounded-full 
                    transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-2 text-center">
        <Link 
          to="/projects" 
          className="text-[#7f4ca5] dark:text-[#a67bc5] hover:underline text-sm font-semibold"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}
