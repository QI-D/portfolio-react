import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import Maze from '../img/maze_game.jpg';
import Snake from '../img/snake.jpg';
import Reminder from '../img/reminder_app.jpg';
import Scheduler from '../img/scheduler.jpg';

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lg">
            Software & Web Development as an Interest
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <a href="https://github.com/QI-D/SMART-roster" target="_blank" rel="noopener noreferrer" className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-fill object-center" alt="scheduler" src={Scheduler} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">Python + Flask + jQuery + MySQL</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Smart Roster Scheduler</h1>
                <p className="leading-relaxed text-left">
                  In partnership with Subject Matter Expertise from <em>BC Women's Hospital</em>, to simplify the process for shift assigments.
                  <ul className="list-disc list-inside text-left object-center">
                    <li>User Authentication</li>
                    <li>Shift Assignments</li>
                    <li>Alert for Conflict and Restriction</li>
                    <li>Test-driven Development</li>
                    <li>Agile Methodology</li>
                  </ul>
                </p>
            </div>
            </div>
          </a>
          <a href="https://github.com/QI-D/Reminder-App-Project" target="_blank" rel="noopener noreferrer" className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-fill object-center" alt="reminder" src={Reminder} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">NodeJS + ExpressJS + EJS + MongoDB</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Social Reminder</h1>
                <p className="leading-relaxed text-left">
                  Web-based Reminder App. Connect with your friends and see what they are up to.
                  <ul className="list-disc list-inside text-left object-center">
                    <li>User Registration</li>
                    <li>User Authentication</li>
                    <li>Friend System</li>
                    <li>Reminder Creation & Modification</li>
                    <li>Agile Methodology</li>
                  </ul>
                </p>
            </div>
            </div>
          </a>
          <a href="https://github.com/QI-D/SnakeGame" target="_blank" rel="noopener noreferrer" className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-fill object-center" alt="snake" src={Snake} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">Python + PyGame + Flask + MySQL</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Snake Game</h1>
                <p className="leading-relaxed text-left">
                  Starving Snake! Get as many apples as you can, try to not eat yourself. What's your ranking on the leaderboard?
                  <ul className="list-disc list-inside text-left object-center">
                    <li>Difficult Levels</li>
                    <li>Speed based on level</li>
                    <li>Score per apple based on level</li>
                    <li>Store player and game info in database</li>
                    <li>Web-based Leaderboard</li>
                  </ul>
                </p>
            </div>
            </div>
          </a>
          <a href="https://github.com/QI-D/Maze_Game" target="_blank" rel="noopener noreferrer" className="sm:w-1/2 w-100 p-4">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-fill object-center" alt="maze" src={Maze} />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">Python + PyGame + Flask</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Maze Game</h1>
                <p className="leading-relaxed text-left">
                  A hero will not get stopped by a maze! Gear up, collecte the treasure and head to the next challenge. 
                  <ul className="list-disc list-inside text-left object-center">
                    <li>MVC Architecture</li>
                    <li>Time & Item Restriction</li>
                    <li>Score Counting</li>
                    <li>Test-Driven Development</li>
                    <li>Agile Methodology</li>
                  </ul>
                </p>
            </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
