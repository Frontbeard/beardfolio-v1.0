import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Home, FolderKanban, FileDown } from "lucide-react";
import resume from "../assets/resume.pdf";

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed left-1/2 bottom-8 transform -translate-x-1/2 z-50 transition-all duration-300 
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
    >
      <div
        className="flex items-center space-x-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md 
        rounded-full shadow-lg p-2 border border-white/20 dark:border-gray-700/50"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-full ${
              isActive
                ? "bg-[#7f4ca5] text-white"
                : "text-gray-700 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-700/50"
            }`
          }
        >
          <Home size={20} />
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `p-2 rounded-full ${
              isActive
                ? "bg-[#7f4ca5] text-white"
                : "text-gray-700 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-700/50"
            }`
          }
        >
          <FolderKanban size={20} />
        </NavLink>
        <a
          href= {resume}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-gray-700 hover:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-700/50"
        >
          <FileDown size={20} />
        </a>
        <div className="bg-white/20 dark:bg-gray-700/50 rounded-full p-1">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
