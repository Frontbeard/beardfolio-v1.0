import { ProfileImage } from "@/components/profile-image"
import { ProfileInfo } from "@/components/profile-info"
import { LanguagesSection } from "@/components/languages-section"
import { ExperienceSection } from "@/components/experience-section"
import { ToolsSection } from "@/components/tools-section"
import { EducationSection } from "@/components/education-section"
import { InterestsSection } from "@/components/interests-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialContactSection } from "@/components/social-contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { CurrentlyPlayingSection } from "@/components/currently-playing-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-6xl grid gap-4 md:grid-cols-12">
        <div className="md:col-span-12 flex justify-end mb-4">
          <ThemeToggle />
        </div>
        {/* Header section */}
        <div className="md:col-span-3">
          <ProfileImage imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC8716%20(1).jpg-p0gcTQ4htfmlbqfkv7IGbUVD5XW12l.jpeg" />
        </div>
        <div className="md:col-span-6">
          <ProfileInfo name="Lucas Benítez" title="Frontend Developer" />
        </div>
        <div className="md:col-span-3">
          <SocialContactSection />
        </div>

        {/* Main content */}
        <div className="md:col-span-8 space-y-4">
          <ExperienceSection />
          <ToolsSection />
        </div>
        <div className="md:col-span-4 space-y-4">
          <LanguagesSection />
          <EducationSection />
          <ProjectsSection />
          <InterestsSection />
          <CurrentlyPlayingSection />
        </div>
      </div>
    </div>
  )
}

