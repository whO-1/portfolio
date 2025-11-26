import { defineHex, Grid, rectangle } from "honeycomb-grid";

type Cell = {
  toPoint?: () => { x: number; y: number };
  q?: number;
  r?: number;
  x?: number;
  y?: number;
};

type honeyCombProps = {
  hexSize: number;
  cols: number;
  rowSpacing: number;
  nrOfItems: number;
};

type hexPlate = {
  top: number;
  left: number;
};

export const HoneyCombGrid = (
  hexSize: number,
  cols: number,
  rowSpacing: number,
  nrOfItems: number,
  hexWidth: number,
  hexHeight: number,
  padding: number
) => {
  const centers = initHoneyCombGrid({ hexSize, cols, rowSpacing, nrOfItems });
  const bounds = computeBounds(centers, hexWidth, hexHeight, padding);

  return {
    hexPlates: centers.map<hexPlate>((center) => {
      return {
        top: center.y + bounds.offsetY - hexHeight / 2,
        left: center.x + bounds.offsetX - hexWidth / 2,
      };
    }),
    width: bounds.width,
    height: bounds.height,
  };
};

const initHoneyCombGrid = ({
  hexSize,
  cols,
  rowSpacing,
  nrOfItems,
}: honeyCombProps) => {
  const Hex = defineHex({ dimensions: hexSize, origin: "topLeft" });

  const grid = new Grid(
    Hex,
    rectangle({ width: cols, height: Math.ceil(nrOfItems / cols) })
  );
  const cells = Array.from(grid).slice(0, nrOfItems);

  const getCenter = (cell: unknown) => {
    const c = cell as Cell;
    if (typeof c.toPoint === "function") return c.toPoint();
    const q = typeof c.q === "number" ? c.q : typeof c.x === "number" ? c.x : 0;
    const r = typeof c.r === "number" ? c.r : typeof c.y === "number" ? c.y : 0;
    const x = hexSize * Math.sqrt(3) * (q + r / 2);
    const y = hexSize * rowSpacing * r;
    return { x, y };
  };
  return cells.map(getCenter);
};

const computeBounds = (
  centers: { x: number; y: number }[],
  hexWidth: number,
  hexHeight: number,
  padding: number
) => {
  const result = centers.reduce(
    (acc, { x, y }) => {
      acc.minX = Math.min(acc.minX, x - hexWidth / 2);
      acc.minY = Math.min(acc.minY, y - hexHeight / 2);
      acc.maxX = Math.max(acc.maxX, x + hexWidth / 2);
      acc.maxY = Math.max(acc.maxY, y + hexHeight / 2);
      return acc;
    },
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
  );
  const offsetX = -result.minX + padding;
  const offsetY = -result.minY + padding;
  const width = Math.ceil(result.maxX - result.minX) + padding * 2;
  const height = Math.ceil(result.maxY - result.minY) + padding * 2;
  return { ...result, padding, offsetX, offsetY, width, height };
};
