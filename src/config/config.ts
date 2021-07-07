export const API_URL = "https://stormy-beyond-97168.herokuapp.com";
const size = {
  xs: "320px",
  sm: "768px",
  lg: "1200px",
};

const numberSize = {
  xs: 320,
  sm: 768,
  lg: 1200,
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export const breakcpoints = { device, size, numberSize };
