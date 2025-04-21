
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-700 hover:text-turquoise-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-turquoise-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-6 text-xl">
              <li>
                <Link
                  to="/#about"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#certificates"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  to="/#education"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-gray-700 hover:text-turquoise-600 transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
