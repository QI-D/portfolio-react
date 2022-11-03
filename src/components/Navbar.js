import React from "react";
import Resume from "../Qi_Dang_Resume.pdf"

export default function Navbar() {
  return (
    <header>
      <div>
        <a>
          <a href="#about">
            QD
          </a>
        </a>
        <nav>
          <a href="#projects">
            Projects
          </a>
          <a href="#skills">
            Skills
          </a>
          <a href={Resume} target="_blank">
            Resume
          </a>
        </nav>
        <a
          href="https://github.com/QI-D" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/qi-dang/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </header>
  );
}
