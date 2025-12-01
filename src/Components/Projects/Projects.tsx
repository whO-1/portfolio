import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import Hexagon from "../Layout/Hexagon";
import { HoneyCombGrid } from "../../extensions/honeyComb";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  color: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "var(--gray-500)",
  },
  {
    id: "p2",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "var(--gray-300)",
  },
  {
    id: "p3",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "var(--gray-100)",
  },
  {
    id: "p4",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "var(--gray-500)",
  },
  { id: "p5", title: "", subtitle: "", color: "var(--gray-300)" },
  { id: "p6", title: "", subtitle: "", color: "var(--gray-100)" },
  { id: "p7", title: "", subtitle: "", color: "var(--gray-500)" },
  { id: "p8", title: "", subtitle: "", color: "var(--gray-300)" },
  { id: "p9", title: "", subtitle: "", color: "var(--gray-100)" },
  { id: "p10", title: "", subtitle: "", color: "var(--gray-500)" },
  { id: "p11", title: "", subtitle: "", color: "var(--gray-300)" },
  { id: "p12", title: "", subtitle: "", color: "var(--gray-100)" },
  { id: "p13", title: "", subtitle: "", color: "var(--gray-500)" },
  { id: "p14", title: "", subtitle: "", color: "var(--gray-300)" },
  { id: "p15", title: "", subtitle: "", color: "var(--gray-100)" },
];

const Projects: React.FC = () => {
  const hexSize = 200;
  const cols = 3;
  const rowSpacing = 0.5;
  const hexWidth = 200;
  const hexHeight = 173;
  const padding = 12;

  const { hexPlates, width, height } = HoneyCombGrid(
    hexSize,
    cols,
    rowSpacing,
    projects.length,
    hexWidth,
    hexHeight,
    padding
  );

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      className={styles.honeycomb}
      style={
        isMobile
          ? {
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
            }
          : { width, height, overflow: "scroll" }
      }
    >
      {projects.map((p, i) => {
        return (
          <Hexagon
            key={p.id}
            stylesParent={
              isMobile
                ? {
                    display: "block",
                    width: "60vw",
                    height: "50vw",
                  }
                : {
                    position: "absolute",
                    left: `${hexPlates[i].left}px`,
                    top: `${hexPlates[i].top}px`,
                    width: `${hexWidth}px`,
                    height: `${hexHeight}px`,
                  }
            }
            stylesHex={{ backgroundColor: p.color }}
          >
            <div className={styles.hexTitle}>{p.title}</div>
            <div className={styles.hexSubtitle}>{p.subtitle}</div>
          </Hexagon>
        );
      })}
    </div>
  );
};

export default Projects;
