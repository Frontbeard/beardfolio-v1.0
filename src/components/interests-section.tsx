export function InterestsSection() {
  const interests = [
    "web development",
    "frontend",
    "backend",
    "user experience",
    "responsive design",
    "cloud services",
    "agile methodologies",
    "continuous learning",
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
      <h2 className="text-xl font-bold mb-3 dark:text-white">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-2 py-1 bg-white dark:bg-gray-700 rounded-full text-xs border border-gray-200 dark:border-gray-600 
              transition-all duration-300 hover:shadow-lg hover:scale-[1.02] 
              hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] hover:text-white dark:hover:text-white"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
