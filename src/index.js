import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#638ec3",
  },
  {
    skill: "CSS",
    level: "advanced",
    color: "#e0af1b",
  },
  {
    skill: "HTML",
    level: "advanced",
    color: "#59cea3",
  },
  {
    skill: "ES6",
    level: "advanced",
    color: "#ba6b6b",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#719369",
  },
  {
    skill: "Git",
    level: "intermediate",
    color: "#7d5583",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#d67a50",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="Profile pic" />;
}

function Intro() {
  return (
    <div>
      <h1>SOFIA MARTINS</h1>
      <p>
        I'm no stranger to creativity, having spent my days as a graphic
        designer. Then I discovered the fun of coding, and I now bring the
        artistic and perfectionist eye of a designer to the precision of coding!
        I'm currently taking a <strong>React course</strong> and having tons of
        fun with it!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>{" "}
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "✌"}
        {level === "beginner" && "👍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
