export type StarType = "full" | "half";

export const countStarsRate = (rate: number): StarType[] => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;

  return Array(fullStars)
    .fill("full")
    .concat(hasHalfStar ? ["half"] : []);
};
