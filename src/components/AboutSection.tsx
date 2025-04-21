
export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            About <span className="text-turquoise-600">Me</span>
          </h2>
          <div className="bg-turquoise-50 p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-4">
              I am a passionate professional with expertise in cloud computing. With solid knowledge in various programming languages and platforms, I enjoy creating efficient solutions to complex problems.
            </p>
            <p className="text-gray-700">
              My recent focus has been on cloud technologies, particularly Azure and AWS, where I've been developing and deploying scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-turquoise-100">
              <h3 className="text-xl font-semibold mb-3 text-turquoise-700">Contact Information</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:malluvalasajaideep@gmail.com" className="text-turquoise-600 hover:underline">
                    malluvalasajaideep@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Mobile:</span>
                  <a href="tel:9346158730" className="text-turquoise-600 hover:underline">
                    9346158730
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">LinkedIn:</span>
                  <a 
                    href="https://www.linkedin.com/in/malluvalasa-jaideep/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turquoise-600 hover:underline"
                  >
                    malluvalasa-jaideep
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">GitHub:</span>
                  <a 
                    href="https://github.com/MALLUVALASAJAIDEEP"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-turquoise-600 hover:underline"
                  >
                    MALLUVALASAJAIDEEP
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-turquoise-100">
              <h3 className="text-xl font-semibold mb-3 text-turquoise-700">Training</h3>
              <div>
                <h4 className="font-medium">Experton Self-Paced (Cloud Computing)</h4>
                <p className="text-sm text-gray-500 mb-2">June 1st - Aug 22nd [2024]</p>
                <p className="text-gray-700">
                  Completed an intensive hands-on training program focused on Cloud Computing concepts and Microsoft Azure tools. Gained proficiency in cloud infrastructure, services, and deployment models including IaaS, PaaS, and SaaS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
