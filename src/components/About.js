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
                  'Software Engineer',
                  1500,
                  'Full Stack Engineer',
                  1500,
                  'Cloud Engineer',
                  1500,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </p>
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Experienced Software Engineer with over 3 years of expertise in <strong>cloud-based applications</strong>, <strong>distributed systems</strong>, 
            <strong> full stack engineering</strong>, and <strong>DevOps practices</strong>. Proficient in <strong>AWS</strong>, <strong>Azure</strong>, and <strong>GCP</strong>, with a strong focus on 
            <strong> microservices architecture</strong>, <strong>cloud automation</strong>, and building scalable backend solutions. Skilled in developing 
            web applications using <strong>Node.js</strong>, <strong>React</strong>, <strong>Python</strong>, and <strong>SQL</strong>, with expertise in implementing 
            <strong> CI/CD pipelines</strong>, containerization with <strong>Docker</strong>, and orchestration using <strong>Kubernetes</strong>. 
            Experienced in <strong>API development</strong>, designing RESTful APIs and integrating them into distributed systems to support seamless communication between services.
            Collaborative team player with a track record of delivering secure, efficient, and scalable solutions. Passionate about continuous improvement, system observability, and leveraging cloud-native technologies.
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
