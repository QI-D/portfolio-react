import React from "react";
import Typical from 'react-typical';
import QD from '../img/qd.jpg';

export default function About() {
  return (
    <section id="about">
      <div>
        <div>
          <h1>
            Hi, I'm Qi.
            <br />
            <p>I'm a Vancouver, BC based{' '}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'Software',
                1500,
                'Full Stack',
                1500,
                'DevOps',
                1500
              ] }
            />
          Developer.</p>
          </h1>
          <p>
            Passionate about <strong>software development</strong>, <strong>cloud computing</strong>, and <strong>automation</strong>. My entrepreneurial background has taught me strong interpersonal, and problem-solving skill, and persistence. BCIT CIT program has given me broad technology skill set including software & web development, cloud computing, database design/management, Windows & Linux system administration, and networking. My skill set was enhanced during my 16-months Co-op experiences.
          </p>
          <div>
            <a href="mailto:qid14@outlook.com" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
            <a href="#projects">
              My Projects
            </a>
          </div>
        </div>
        <div>
        <img alt="QD" src={QD}/>
        </div>
      </div>
    </section>
  );
}
