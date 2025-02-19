export function EducationSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
      <h2 className="text-xl font-bold mb-3 dark:text-white">Education</h2>
      <div className="space-y-3">
        
        <a href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=9d6be16a3ad7effa6531c305b3249d9cbf27149d97b0347b1e194c5bb68f5a4b" target="_blank" rel="noopener noreferrer"
          className="block bg-white dark:bg-gray-700 rounded-2xl p-3 transition-all duration-300 
          hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
          hover:text-white dark:hover:text-white group">
          
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg group-hover:text-white dark:text-white">2023-2024</span>
            <span className="text-yellow-300">💛</span>
          </div>
          
          <h3 className="font-bold text-base mb-1 group-hover:text-white dark:hover:text-white">
            Full Stack Web Developer
          </h3>
          
          <div className="flex flex-wrap gap-1">
            <span className="text-xs bg-gray-200 dark:bg-gray-600 
              group-hover:bg-white group-hover:text-[#7f4ca5] px-2 py-0.5 rounded-full">
              #Henry
            </span>
            <span className="text-xs bg-gray-200 dark:bg-gray-600 
              group-hover:bg-white group-hover:text-[#7f4ca5] px-2 py-0.5 rounded-full">
              #Bootcamp
            </span>
          </div>
        </a>

        <a href="https://www.coderhouse.com/ar/" target="_blank" rel="noopener noreferrer"
          className="block bg-white dark:bg-gray-700 rounded-2xl p-3 transition-all duration-300 
          hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
          hover:text-white dark:hover:text-white group">
          
          <div className="mb-1">
            <span className="text-lg group-hover:text-white dark:text-white">2022</span>
          </div>
          
          <h3 className="font-bold text-base mb-1 group-hover:text-white dark:hover:text-white">
            JavaScript
          </h3>
          
          <div className="flex flex-wrap gap-1">
            <span className="text-xs bg-gray-200 dark:bg-gray-600 
              group-hover:bg-white group-hover:text-[#7f4ca5] px-2 py-0.5 rounded-full">
              #CoderHouse
            </span>
            <span className="text-xs bg-gray-200 dark:bg-gray-600 
              group-hover:bg-white group-hover:text-[#7f4ca5] px-2 py-0.5 rounded-full">
              #WebDev
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}
