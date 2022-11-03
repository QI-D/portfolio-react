import React from "react";
import Maze from '../img/maze_game.jpg';
import Snake from '../img/snake.jpg';
import Reminder from '../img/reminder_app.jpg';
import Scheduler from '../img/scheduler.jpg';

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <div>
          <h1>
            Projects
          </h1>
          <p>
            Software & Web Development as an Interest
          </p>
        </div>
        <div>
          <a href="https://github.com/QI-D/SMART-roster" target="_blank" rel="noopener noreferrer">
          <div>
            <img alt="scheduler" src={Scheduler} />
            <div>
                <h2>Python + Flask + jQuery + MySQL</h2>
                <h1>Smart Roster Scheduler</h1>
                <p>
                  In partnership with Subject Matter Expertise from <em>BC Women's Hospital</em>, to simplify the process for shift assigments.
                  <ul>
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
          <a href="https://github.com/QI-D/Reminder-App-Project" target="_blank" rel="noopener noreferrer">
          <div>
            <img alt="reminder" src={Reminder} />
            <div>
                <h2>NodeJS + ExpressJS + EJS + MongoDB</h2>
                <h1>Social Reminder</h1>
                <p>
                  Web-based Reminder App. Connect with your friends and see what they are up to.
                  <ul>
                    <li>User Registration</li>
                    <li>User Authentication</li>
                    <li>Friend System</li>
                    <li>Reminder Creation & Modification</li>
                  </ul>
                  <br/>
                </p>
            </div>
            </div>
          </a>
          <a href="https://github.com/QI-D/SnakeGame" target="_blank" rel="noopener noreferrer">
          <div>
            <img alt="snake" src={Snake} />
            <div>
                <h2>Python + PyGame + Flask + MySQL</h2>
                <h1>Snake Game</h1>
                <p>
                  Starving Snake! Get as many apples as you can, try to not eat yourself. What's your ranking on the leaderboard?
                  <ul>
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
          <a href="https://github.com/QI-D/Maze_Game" target="_blank" rel="noopener noreferrer">
          <div>
            <img alt="maze" src={Maze} />
            <div>
                <h2>Python + PyGame + Flask</h2>
                <h1>Maze Game</h1>
                <p>
                  A hero will not get stopped by a maze! Gear up, collecte the treasure and head to the next challenge. 
                  <ul>
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
