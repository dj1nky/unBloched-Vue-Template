export const ANIMATIONS = {
  "fade-in": {
    class: "fade-in",
    triggers: ["fade-in-right", "fade-in-left", "fade-in-up", "fade-in-down"],
  },
  "fade-in-right": {
    class: "fade-in-right",
    triggers: ["fade-in", "fade-in-left", "fade-in-up", "fade-in-down"],
  },
  "fade-in-left": {
    class: "fade-in-left",
    triggers: ["fade-in", "fade-in-right", "fade-in-up", "fade-in-down"],
  },
  "fade-in-up": {
    class: "fade-in-up",
    triggers: ["fade-in", "fade-in-right", "fade-in-left", "fade-in-down"],
  },
  "fade-in-down": {
    class: "fade-in-down",
    triggers: ["fade-in", "fade-in-right", "fade-in-left", "fade-in-up"],
  },
  "scale-in": {
    class: "scale-in",
    triggers: [
      "fade-in",
      "fade-in-right",
      "fade-in-left",
      "fade-in-up",
      "fade-in-down",
    ],
  },
};
