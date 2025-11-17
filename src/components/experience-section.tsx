export function ExperienceSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Experience</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] hover:text-white dark:hover:text-white group">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-white">
                FullStack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white">
                Branak | Remote
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-[#7f4ca5] text-white group-hover:bg-white group-hover:text-[#7f4ca5] rounded-full text-xs">
                most recent
              </span>
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-white">
                Mar. 2024 - Nov. 2024
              </span>
            </div>
          </div>
          <ul className="list-disc ml-4 space-y-1 text-gray-700 dark:text-gray-300 group-hover:text-white">
            <li>
              Development of Branak, a web application for learning English
            </li>
            <li>
              Design and development of frontend components with React and
              Material-UI
            </li>
            <li>Implementation of GraphQL with Apollo Client</li>
            <li>Backend development with Node.js and Express</li>
            <li>Teamwork with agile methodologies and weekly goals</li>
            <li>Focus on scalability, performance, and user experience</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] hover:text-white dark:hover:text-white group">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-white">
                FullStack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white">
                Luna Digital | Full-time
              </p>
            </div>
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-white">
              Aug. 2023 - Jun. 2024
            </span>
          </div>
          <ul className="list-disc ml-4 space-y-1 text-gray-700 dark:text-gray-300 group-hover:text-white">
            <li>Development of web projects using WordPress</li>
            <li>Design and development of custom themes</li>
            <li>Integration of functionalities and performance optimization</li>
            <li>
              Implementation of innovative solutions to exceed client
              expectations
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-[#7f4ca5] dark:hover:bg-[#7f4ca5] hover:text-white dark:hover:text-white group">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-white">
                WordPress Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-white">
                LR Studio | Freelance
              </p>
            </div>
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-white">
              Nov. 2023 - Feb. 2024
            </span>
          </div>
          <ul className="list-disc ml-4 space-y-1 text-gray-700 dark:text-gray-300 group-hover:text-white">
            <li>
              Development and maintenance of WordPress websites using Elementor
            </li>
            <li>Establishment of a strong online presence for clients</li>
            <li>Optimization of performance and user experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
