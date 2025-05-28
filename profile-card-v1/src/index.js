import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/8?v=4"
      alt="Avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>
        Hi, I'm <strong>John Doe</strong>, a web developer with a passion for
        creating interactive and dynamic web applications.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = [
    { name: "HTML", level: "Advanced", color: "red" },
    { name: "CSS", level: "Advanced", color: "green" },
    { name: "JavaScript", level: "Intermediate", color: "blue" },
    { name: "React", level: "Intermediate", color: "yellow" },
    { name: "Node.js", level: "Beginner", color: "pink" },
  ];

  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

function Skill({ name, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>{level}</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
