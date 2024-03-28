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
            Experienced Cloud Software Engineer with a solid background in <strong>software development</strong>, <strong>cloud computing</strong>,
            and <strong>automation</strong>. Proficient in AWS, GCP, and Azure, adept at implementing automated pipelines and
            developing web applications using a diverse set of technologies including JavaScript, Python, and related frameworks. Skilled
            in DevOps tools such as Terraform, Ansible, and Docker, with a keen focus on maximizing efficiency and scalability.
            Collaborative team player with a track record of delivering successful projects and fostering continuous improvement.
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
          <img className="object-cover object-center rounded-full" alt="QD" src="./img/qd.jpg" />
        </div>
      </div>
    </section>
  );
}
