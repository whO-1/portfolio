export const textWrap = (
  text: string,
  limit: number,
  suffix: string = "..."
): string => {
  if (!text || text.length <= limit) return text;
  const truncated = text.slice(0, limit);
  const lastSpace = truncated.lastIndexOf(" ");
  const safeCut = lastSpace === -1 ? truncated : truncated.slice(0, lastSpace);

  return safeCut.trim() + "..." + suffix;
};
