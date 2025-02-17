import { ProjectGallery } from "@/components/project-gallery";
import { ThemeToggle } from "@/components/theme-toggle";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-[#7f4ca5] hover:underline dark:text-[#a67bc5]"
          >
            ← Back to CV
          </button>
          <ThemeToggle />
        </div>
        <ProjectGallery />
      </div>
    </div>
  );
}
