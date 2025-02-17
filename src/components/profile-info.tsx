interface ProfileInfoProps {
  name: string
  title: string
}

export function ProfileInfo({ name, title }: ProfileInfoProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 h-full flex flex-col justify-center">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl dark:text-white">Hello 👋 I'm</h1>
        </div>
        <h2 className="text-3xl font-bold dark:text-white">{name}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">{title}</p>
      </div>
    </div>
  )
}

