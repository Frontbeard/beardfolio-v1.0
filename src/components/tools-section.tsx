import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiWordpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAmazondynamodb,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"

const categories = [
  {
    name: "Frontend",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    tools: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    name: "Backend",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    tools: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
    ],
  },
  {
    name: "Database",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    tools: [
      { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    name: "Infrastructure",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    tools: [{ name: "AWS", icon: FaAws, color: "#FF9900" }],
  },
  {
    name: "No-Code",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    tools: [{ name: "WordPress", icon: SiWordpress, color: "#21759B" }],
  },
  {
    name: "Design",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    tools: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
    ],
  },
]

export const ToolsSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.flatMap((category) =>
          category.tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <tool.icon className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: tool.color }} />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium dark:text-gray-200 truncate">{tool.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${category.color} mt-1 truncate`}>
                  {category.name}
                </span>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  )
}

