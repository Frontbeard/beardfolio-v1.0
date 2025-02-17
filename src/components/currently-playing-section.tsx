import { useState, useEffect } from "react"
import { Music, Pause, Play } from "lucide-react"

interface SpotifyTrack {
  name: string
  artist: string
  album: string
  albumArt: string
  isPlaying: boolean
}

export function CurrentlyPlayingSection() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch("/api/spotify-currently-playing")
        if (!response.ok) {
          throw new Error("Failed to fetch currently playing track")
        }
        const data = await response.json()
        setTrack(data)
      } catch (err) {
        setError("Unable to fetch currently playing track")
        console.error(err)
      }
    }

    fetchCurrentlyPlaying()
    const interval = setInterval(fetchCurrentlyPlaying, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (error) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
        <h2 className="text-xl font-bold mb-3 dark:text-white flex items-center">
          <Music className="mr-2" />
          Currently Playing
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{error}</p>
      </div>
    )
  }

  if (!track) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
        <h2 className="text-xl font-bold mb-3 dark:text-white flex items-center">
          <Music className="mr-2" />
          Currently Playing
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
      <h2 className="text-xl font-bold mb-3 dark:text-white flex items-center">
        <Music className="mr-2" />
        Currently Playing
      </h2>
      <div className="flex items-center space-x-4">
        <img src={track.albumArt || "/placeholder.svg"} alt={`${track.album} cover`} className="w-16 h-16 rounded-md" />
        <div className="flex-grow">
          <p className="font-semibold dark:text-white">{track.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{track.artist}</p>
          <p className="text-xs text-gray-500 dark:text-gray-500">{track.album}</p>
        </div>
        {track.isPlaying ? (
          <Pause className="w-6 h-6 text-green-500" />
        ) : (
          <Play className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        )}
      </div>
    </div>
  )
}

