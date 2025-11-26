import React, { type ReactElement } from "react";
import { Card } from "react-bootstrap";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  title: string;
  text: string;
  children?: ReactElement;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, text, children }) => {
  return (
    <Card className={styles.CardBox}>
      <Card.Body>
        <div
          className={`w-100 d-flex justify-content-center py-2 mb-4 ${styles.IconBox}`}
        >
          {children}
        </div>
        <Card.Title className={`${styles.CardTitle} mb-4`}>{title}</Card.Title>
        <Card.Text className={`${styles.CardText} mb-5`}>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
