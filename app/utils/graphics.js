export const icons = [
  "chevronDown",
  "home",
  "loader",
  "minus",
  "plus",
  "singleChevron",
  "singleChevronWhite",
];

// Utility function to generate icon path
export const getIcon = iconName => {
  return `/icons/${iconName}.svg`;
};

// Image that also accepts a specific format
export const getImage = (imageName, format = "webp") => {
  const validFormats = ["webp", "png", "jpeg", "jpg"];
  const selectedFormat = validFormats.includes(format) ? format : "webp";
  return `/images/${imageName}.${selectedFormat}`;
};
