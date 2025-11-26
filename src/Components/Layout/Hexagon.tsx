import styles from "./Hexagon.module.css";

interface HexagonProps {
  children?: React.ReactNode;
  stylesParent?: React.CSSProperties;
  stylesHex?: React.CSSProperties & { [key: `--${string}`]: string };
}

const Hexagon: React.FC<HexagonProps> = ({
  children,
  stylesParent,
  stylesHex,
}) => {
  return (
    <div className={styles.hexWrapper} style={stylesParent}>
      <div className={styles.hexGlow}></div>
      <div className={`${styles.hexContent}`} style={stylesHex}>
        {children}
      </div>
    </div>
  );
};

export default Hexagon;
