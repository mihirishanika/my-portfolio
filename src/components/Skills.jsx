import React from 'react';
import '../styles/Skills.css';

// Font Awesome icons
import {
    FaReact,
    FaPython,
    FaCodepen,
    FaGitAlt,
    FaTerminal // fallback for Bash
} from "react-icons/fa";

import {
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiAnsible,
    SiGithubactions,
    SiJenkins,
    SiGnubash,
    SiGit,
    SiGrafana,
    SiJavascript,
    SiAmazonwebservices,
    SiLinux
} from "react-icons/si";

import { IoInfiniteSharp } from "react-icons/io5";
import { DiScrum } from "react-icons/di";

function Skills() {
  // Define brand colors for each technology
  const iconColors = {
        Docker: "#2496ED",               // SiDocker - Docker Blue
        Kubernetes: "#326CE5",           // SiKubernetes - Kubernetes Blue
        Terraform: "#623CE4",            // SiTerraform - Terraform Purple
        Ansible: "#000000",              // SiAnsible - Ansible Black

        AWS: "#FF9900",                  // AWS Orange
        "GitHub Actions": "#2088FF",     // GitHub Blue
        Jenkins: "#D24939",              // Jenkins Red/Brown
        "Bash Scripting": "#4EAA25",     // Bash Green

        Python: "#3776AB",               // Python Blue
        Git: "#F05032",                  // Git Orange
        "CI/CD": "#0A0A0A",              // Pipelines (black/gray)

        Agile: "#6DB33F",                // Scrum/Agile Green
        GitOps: "#F05032",               // Reuse Git Orange
        Grafana: "#F46800",              // Grafana Orange
        IaC: "#000000",                  // Infra as Code

        React: "#61DAFB",
        JavaScript: "#F7DF1E",
  };

  const skillCategories = [
    {
      title: "DevOps & Infrastructure:",
      skills: [
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiTerraform />, name: "Terraform" },
        { icon: <IoInfiniteSharp />, name: "CI/CD" },
        { icon: <FaCodepen />, name: "IaC" },
        { icon: <SiAnsible />, name: "Ansible" },
        { icon: <SiGrafana />, name: "Grafana" },
        { icon: <DiScrum />, name: "Agile" }
      ]
    },
    {
      title: "Cloud & Automation:",
      skills: [
        { icon: <SiAmazonwebservices />, name: "AWS" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
        // Use SiGnubash if available, else FaTerminal
        { icon: (typeof SiGnubash !== "undefined" ? <SiGnubash /> : <FaTerminal />), name: "Bash Scripting" }
      ]
    },
    {
      title: "Programming & Development:",
      skills: [
        { icon: <SiLinux />, name: "Linux" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGit />, name: "GitOps" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiJavascript />, name: "JavaScript" }
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
