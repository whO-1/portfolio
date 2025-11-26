import React, { useEffect, useRef } from "react";
import { defineHex, Grid, rectangle } from "honeycomb-grid";
import styles from "./Projects.module.css";

type HexInstance = {
  toPoint: () => { x: number; y: number };
};

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
    color: "var(--color-secondary)",
  },
  {
    id: "p2",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "#5749a8",
  },
  {
    id: "p3",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "var(--color-accent)",
  },
  {
    id: "p4",
    title: "LIGHT BREATH",
    subtitle: "Web store template",
    color: "#7a7b86",
  },
  { id: "p5", title: "?", subtitle: "?", color: "var(--color-alt)" },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Hex = defineHex({
      dimensions: 30,
      origin: "topLeft",
    });

    const grid = new Grid(
      Hex,
      rectangle({ width: 4, height: Math.ceil(projects.length / 4) })
    );

    containerRef.current.innerHTML = "";

    let index = 0;
    grid.forEach((hex) => {
      const hexInstance = hex as unknown as HexInstance;
      const { x, y } = hexInstance.toPoint();

      const project = projects[index % projects.length];

      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
      div.style.width = "200px";
      div.style.height = "173px";
      div.style.clipPath =
        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
      div.style.backgroundColor = project.color;
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.justifyContent = "center";
      div.style.alignItems = "center";
      div.style.color = "#fff";
      div.style.fontWeight = "bold";
      div.innerHTML = `<div>${project.title}</div><div>${
        project.subtitle || ""
      }</div>`;

      containerRef.current!.appendChild(div);

      index++;
    });

    const gridArray = Array.from(grid);
    const lastHex = gridArray[gridArray.length - 1] as HexInstance;
    const { x: lastX, y: lastY } = lastHex.toPoint();
    containerRef.current.style.width = `${lastX + 200}px`;
    containerRef.current.style.height = `${lastY + 173}px`;
  }, []);

  return <div ref={containerRef} className={styles.honeycomb} />;
};

export default Projects;
