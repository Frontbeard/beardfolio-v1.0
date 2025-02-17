"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  date: string
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    date: "2023-05-15",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    date: "2023-02-10",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    date: "2022-11-20",
  },
  {
    title: "Weather Forecast App",
    description: "A mobile app providing accurate weather forecasts with beautiful visualizations.",
    technologies: ["React Native", "OpenWeather API", "Redux"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/yourusername/weather-app",
    date: "2022-08-05",
  },
  {
    title: "Blog CMS",
    description: "A custom content management system for managing blog posts and user comments.",
    technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "https://example-blog.com",
    date: "2022-06-30",
  },
]

export function ProjectGallery() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

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
  )
}

