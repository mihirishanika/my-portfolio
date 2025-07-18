import React from 'react';
import '../styles/Skills.css';

// Font Awesome icons
import { FaHtml5, FaCss3Alt, FaUnity, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';

// Simple Icons
import {
  SiSolidity,
  SiC,
  SiJavascript,
  SiWeb3Dotjs,
  SiTypescript,
  SiDocker,
  SiTensorflow,
  SiCplusplus,
  SiKubernetes,
  SiJenkins
} from 'react-icons/si';

function Skills() {
  // Define brand colors for each technology
  const iconColors = {
    HTML5: "#E34F26",
    CSS3: "#1572B6",
    Unity: "#000000",
    React: "#61DAFB",
    Solidity: "#363636",
    Git: "#F05032",
    C: "#A8B9CC",
    JavaScript: "#F7DF1E",
    "Web3.js": "#F16822",
    TypeScript: "#3178C6",
    Docker: "#2496ED",
    TensorFlow: "#FF6F00",
    "C++": "#00599C",
    Figma: "#F24E1E"
  };

  const skillCategories = [
    {
      title: "Using now:",
      skills: [
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiSolidity />, name: "Solidity" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiC />, name: "C" },
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ]
    },
    {
      title: "Learning:",
      skills: [
        { icon: <FaUnity />, name: "Unity" },
        { icon: <SiWeb3Dotjs />, name: "Web3.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiTensorflow />, name: "TensorFlow" }
      ]
    },
    {
      title: "Other Skills:",
      skills: [
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaFigma />, name: "Figma" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header-box">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div
                      className="skill-icon"
                      style={{ color: iconColors[skill.name] }}
                    >
                      {skill.icon}
                    </div>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;