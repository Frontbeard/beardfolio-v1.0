export function LanguagesSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-4">
      <h2 className="text-xl font-bold mb-3 dark:text-white">Languages</h2>
      <div className="space-y-3">
        
        {/* Spanish */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-3 transition-all duration-300 
          hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
          hover:text-white dark:hover:text-white group">
          <div className="flex justify-between text-sm">
            <span className="font-medium group-hover:text-white">Spanish</span>
            <span className="text-[#7f4ca5] font-semibold group-hover:text-white">Nativo</span>
          </div>
        </div>

        {/* English */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-3 transition-all duration-300 
          hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] 
          hover:text-white dark:hover:text-white group">
          <div className="flex justify-between text-sm">
            <span className="font-medium group-hover:text-white">English</span>
            <span className="text-[#7f4ca5] font-semibold group-hover:text-white">
              <a 
                href="TU_LINK_AL_CERTIFICADO" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline group-hover:text-white"
              >
                B1 Intermediate
              </a>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
