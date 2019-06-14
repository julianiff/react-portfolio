import { GlobalStyles } from "./global";

export const colorPicker = index => {
  const colors = Object.values(GlobalStyles.color.colorPalette);
  return colors[index % colors.length];
};
