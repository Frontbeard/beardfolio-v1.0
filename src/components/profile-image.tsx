interface ProfileImageProps {
  imageUrl: string
}

export function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 h-[200px]">
      <img
        src={imageUrl || "/placeholder.svg"}
        alt="Profile picture"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  )
}

