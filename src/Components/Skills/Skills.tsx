import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ClockIcon,
  CircleStackIcon,
  CodeBracketIcon,
  Squares2X2Icon,
  AcademicCapIcon,
  BugAntIcon,
} from "@heroicons/react/24/outline";
import "./Skills.module.css";
import SkillCard from "./SkillCard";

type Skill = {
  id: string;
  title: string;
  text: string;
  icon: React.ElementType;
};

const skills: Skill[] = [
  {
    id: "s1",
    title: "Efficient process time",
    text: "Fast design development and product delivery in time. Support during all development process.",
    icon: ClockIcon,
  },
  {
    id: "s2",
    title: "Clean & modern UI",
    text: "Designs focused on clarity, accessibility and visual hierarchy.",
    icon: CircleStackIcon,
  },
  {
    id: "s3",
    title: "Responsive layouts",
    text: "Layouts that adapt smoothly to every screen size and device.",
    icon: CodeBracketIcon,
  },
  {
    id: "s4",
    title: "Performant code",
    text: "Optimized builds and small bundles for fast load times.",
    icon: Squares2X2Icon,
  },
  {
    id: "s5",
    title: "Accessible experiences",
    text: "A11y best practices baked into components and interactions.",
    icon: AcademicCapIcon,
  },
  {
    id: "s6",
    title: "Maintainable systems",
    text: "Well-structured components and clear conventions for scaling.",
    icon: BugAntIcon,
  },
];

const Skills: React.FC = () => {
  return (
    <section>
      <Container
        fluid
        className="container-lg d-flex flex-column align-items-center py-5"
      >
        <h5 className="text-center my-5">
          Get all these benefits from development process
        </h5>

        <Row className="d-flex g-4 mt-2" style={{ width: "70%" }}>
          {skills.map((s) => {
            return (
              <Col
                key={s.id}
                xs={12}
                md={6}
                lg={4}
                className="d-flex align-items-stretch"
              >
                <SkillCard title={s.title} text={s.text}>
                  <s.icon
                    className="mb-3"
                    style={{
                      width: "10vh",
                      color: "var(--gray-300)",
                    }}
                  />
                </SkillCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
