import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="skill-list">
      <Skill
        skillName="JavaScript"
        color="white"
        bgColor="#638ec3"
        emoji="💪"
      />
      <Skill skillName="CSS" color="white" bgColor="#e0af1b" emoji="💪" />
      <Skill skillName="HTML" color="white" bgColor="#59cea3" emoji="💪" />
      <Skill skillName="ES6" color="white" bgColor="#ba6b6b" emoji="💪" />
      <Skill skillName="Java" color="white" bgColor="#719369" emoji="✌" />
      <Skill skillName="Git" color="white" bgColor="#7d5583" emoji="✌" />
      <Skill skillName="React" color="white" bgColor="#d67a50" emoji="👍" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <span>{props.skillName}</span> <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
