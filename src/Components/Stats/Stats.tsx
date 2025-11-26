import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Stats.module.css";
import TechItems from "./TechItems";

// Technologies  I have experince with

const skills = [
  "C#",
  "ASP.NET Core",
  "Entity Framework",
  "SQL",
  "Docker",
  "Azure",
  "React",
  "Node.js",
  "Microservices",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "JWT",
  "OAuth2",
  "MSAL",
  "MySQL",
  "Redis",
  "Kubernetes",
  "CI/CD",
];

const Stats: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center flex-column align-items-center py-4 gap-4">
      <Row className="text-center w-100">
        <h5 className={styles.smallTitle}>
          Overview of Core Development Tools, Languages, and Technologies I Have
          Worked With
        </h5>
      </Row>
      <Row className="d-flex flex-row justify-content-center w-100">
        <div className="honeycomb ">
          <TechItems items={skills} />
        </div>
      </Row>
    </Container>
  );
};

export default Stats;
