import { Link } from "react-router-dom";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      technologies: ["Vue.js", "Firebase"],
    },
    {
      title: "Portfolio Website",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Weather Forecast App",
      technologies: ["React Native", "OpenWeather API"],
    },
    {
      title: "Blog CMS",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
  ];

  const displayedProjects = projects.slice(0, 3);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 h-[400px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-3 dark:text-white">Featured Projects</h2>
      <div className="space-y-2">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-2xl p-2 mb-2 transition-all duration-300 
              hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
              hover:text-white dark:hover:text-white group"
          >
            <h3 className="font-bold text-sm mb-1 group-hover:text-white dark:text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 2).map((tech, techIndex) => (
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
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <Link to="/projects" className="text-[#7f4ca5] dark:text-[#a67bc5] hover:underline text-sm font-semibold">
          View all projects →
        </Link>
      </div>
    </div>
  );
}
