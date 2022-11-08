import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Qi.
            <br className="hidden lg:inline-block" />
            <p>I'm a Vancouver, BC based{' '}
            <TypeAnimation
              sequence={[
                'Software Developer',
                1500,
                'Full Stack Developer',
                1500,
                'DevOps Developer',
                1500,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </p>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Passionate about <strong>software development</strong>, <strong>cloud computing</strong>, and <strong>automation</strong>. My entrepreneurial background has taught me strong interpersonal, and problem-solving skill, and persistence. BCIT CIT program has given me broad technology skill set including software & web development, cloud computing, database design/management, Windows & Linux system administration, and networking. My skill set was enhanced during my 16-months Co-op experiences.
          </p>
          <div className="flex justify-center">
            <a href="mailto:qid14@outlook.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded-full" alt="QD" src="./img/qd.jpg"/>
        </div>
      </div>
    </section>
  );
}
