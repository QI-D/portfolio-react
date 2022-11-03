import React from "react";
import { skills } from "../skill-data";

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div>
          <h1>
            Skills & Technologies
          </h1>
          <p>
            Self Motivated | Quick Learner
          </p>
        </div>
        <div>
          {skills.map((skill) => (
            <div key={skill}>
              <div>
                  {skill.title}:
                  {skill.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
