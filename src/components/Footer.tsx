
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-turquoise-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Malluvalasa Jaideep</h2>
          <p className="text-turquoise-200 mb-6">Cloud Computing & Web Development Professional</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/malluvalasa-jaideep/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise-300 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/MALLUVALASAJAIDEEP"
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-turquoise-300 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:malluvalasajaideep@gmail.com"
              className="hover:text-turquoise-300 transition-colors"
            >
              Email
            </a>
          </div>
          
          <div className="border-t border-turquoise-700 pt-6">
            <p className="text-sm text-turquoise-300">
              &copy; {currentYear} Malluvalasa Jaideep. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
