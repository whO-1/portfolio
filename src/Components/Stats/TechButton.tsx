import React from "react";
import styles from "./TechButton.module.css";

const TechButton: React.FC<{ text: string }> = ({ text }) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={styles.skillBtn}
    >
      {text}
    </button>
  );
};

export default TechButton;
