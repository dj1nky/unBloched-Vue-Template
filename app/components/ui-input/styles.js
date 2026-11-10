const stroke = d => ({
  d,
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2.8,
  "stroke-linecap": "round",
});

const defaultLikertOptions = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

// Shape and mouth per point (worst -> best). Distinct shapes mean the scale
// never relies on colour alone; colours come from the theme in the component. Paths are drawn in a 48x48 viewBox.
const likertFaces = [
  {
    shape: "M24 4 41 14V34L24 44 7 34V14Z",
    mouth: stroke("M17 33Q24 26 31 33"),
  },
  {
    shape: "M15 6H33Q42 6 42 15V33Q42 42 33 42H15Q6 42 6 33V15Q6 6 15 6Z",
    mouth: stroke("M18 32Q24 28 30 32"),
  },
  {
    shape: "M5 24a19 19 0 1 0 38 0a19 19 0 1 0-38 0Z",
    mouth: stroke("M18 30H30"),
  },
  {
    shape:
      "M24 5 31 15.3 44 18.5 35.4 28.7 36.3 42 24 37 11.7 42 12.6 28.7 4 18.5 17 15.3Z",
    mouth: stroke("M18 28Q24 34 30 28"),
    faceY: 4,
  },
  {
    shape:
      "M24 43C9 31 5 23 5 16C5 10 9 6 14 6C18 6 22 8 24 12C26 8 30 6 34 6C39 6 43 10 43 16C43 23 39 31 24 43Z",
    mouth: {
      d: "M15 27Q24 40 33 27Z",
      fill: "currentColor",
      stroke: "currentColor",
      "stroke-width": 2,
      "stroke-linejoin": "round",
    },
  },
];

/** Normalises options (strings, objects or none) and attaches each one's face. */
export const getLikertItems = (options, valueKey, labelKey) => {
  const normalised =
    Array.isArray(options) && options.length
      ? options.map((option, index) =>
          typeof option === "object"
            ? {
                value: Number(option[valueKey] ?? index + 1),
                label: option[labelKey] ?? "",
              }
            : { value: index + 1, label: option }
        )
      : defaultLikertOptions;

  const last = normalised.length - 1;

  return normalised.map((option, index) => ({
    ...option,
    face: likertFaces[
      last <= 0 ? 2 : Math.round((index / last) * (likertFaces.length - 1))
    ],
  }));
};

export const likertEyes = [
  { cx: 17, cy: 20 },
  { cx: 31, cy: 20 },
];
