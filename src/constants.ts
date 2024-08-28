export const WEIGHT = {
  normal: 400,
  medium: 500,
  bold: 800,
  black: 900,
};

export const BREAKPOINTS = {
  phone: 675,
  tablet: 1050,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const SortOptions = [
  {
    value: "popularity",
    label: "Popularity",
  },
  {
    value: "newest-arrival",
    label: "Newest Arrival",
  },
  {
    value: "latest-arrival",
    label: "Latest Arrival",
  },
  {
    value: "price-high-to-low",
    label: "Price High To Low",
  },
  {
    value: "price-low-to-high",
    label: "Price Low To High",
  },
];

export const COLORSFILTER = [
  {
    color: "#00c12b",
    border: "#26a943",
  },
  {
    color: "#F50606",
    border: "#c40505",
  },
  {
    color: "#F5DD06",
    border: "#c4b105",
  },
  {
    color: "#F57906",
    border: "#c46105",
  },
  {
    color: "#06CAF5",
    border: "#05a2c4",
  },
  {
    color: "#063AF5",
    border: "#052ec4",
  },
  {
    color: "#7D06F5",
    border: "#6405c4",
  },
  {
    color: "#F506A4",
    border: "#c40583",
  },
  {
    color: "#000000",
    border: "#000000",
  },
  {
    color: "#FFFFFF",
    border: "#CCCCCC  ",
  },
];
