
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-turquoise-600">
          Malluvalasa Jaideep
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/#about" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/#skills" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/#projects" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/#certificates" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/#education" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                Education
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-gray-700 hover:text-turquoise-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <MobileMenu />
      </div>
    </header>
  );
}
