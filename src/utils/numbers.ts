export const randomRange = (min: number, max: number) => min + Math.round(Math.random() * (max - min));

export const roundDecimals = (number: number, decimals: number) => {
  const base10 = 10 ** decimals;
  return Math.round(number * base10) / base10;
};
