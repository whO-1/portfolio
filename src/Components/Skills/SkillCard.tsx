import React, { type ReactElement } from "react";
import styles from "./SkillCard.module.css";
import { textWrap } from "../../extensions/textWrap";

interface SkillCardProps {
  title: string;
  text: string;
  children?: ReactElement;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, text, children }) => {
  return (
    <div className={styles.CardBox}>
      <div
        className={styles.IconBox}
        style={{
          color: "var(--gray-300)",
        }}
      >
        {children}
      </div>
      <div className={`${styles.CardTitle} mb-4`}>{title}</div>
      <div className={`${styles.CardText} mb-5`}>{textWrap(text, 140)}</div>
    </div>
  );
};

export default SkillCard;
