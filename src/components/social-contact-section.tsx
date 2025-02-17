import { Github, Linkedin, Mail } from "lucide-react"

export function SocialContactSection() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Frontbeard" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/Frontbeard" },
    { name: "Email", icon: Mail, url: "mailto:lufbenitez@gmail.com" },
  ]

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 h-full flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Contact</h2>
      <div className="flex flex-col space-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-[#5a3d7c] dark:text-[#a67bc5] hover:text-[#7f4ca5] dark:hover:text-[#c49de0] transition-colors"
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

