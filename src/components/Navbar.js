import React from "react";
import Resume from "../Qi_Dang_Resume.pdf"

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            QD
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-lg">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-lg">
            Skills
          </a>
          <a href={Resume} target="_blank" className="mr-5 hover:text-white text-lg">
            Resume
          </a>
        </nav>
        <a
          href="https://github.com/QI-D" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-lg">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/qi-dang/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-lg">
          LinkedIn
        </a>
      </div>
    </header>
  );
}
