import React from "react";
import styles from "./TechItems.module.css";
import TechButton from "./TechButton";

interface TechItemsProps {
  items: string[];
}

const TechItems: React.FC<TechItemsProps> = ({ items }) => {
  const buildRows = (count: number): string[][] => {
    const side = Math.ceil(Math.sqrt(count));
    const rowsTemplate = [side - 2, side - 1, side, side - 1, side - 2].filter(
      (r) => r > 0
    );

    const rows: string[][] = [];
    let index = 0;

    for (const length of rowsTemplate) {
      if (index >= items.length) break;
      rows.push(items.slice(index, index + length));
      index += length;
    }

    return rows;
  };

  const rows = buildRows(items.length);

  return (
    <div className={styles.hexContainer}>
      {rows.map((row, i) => (
        <div className={styles.hexRow} key={i}>
          {row.map((item, j) => (
            <TechButton key={j} text={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TechItems;
