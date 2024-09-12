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

export enum SortRating {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export const SortOptions = [
  {
    value: "popularity",
    label: "Popularity",
  },
  {
    value: "newest",
    label: "Newest Arrival",
  },
  {
    value: "latest",
    label: "Latest Arrival",
  },
  {
    value: "priceHighToLow",
    label: "Price High To Low",
  },
  {
    value: "priceLowToHigh",
    label: "Price Low To High",
  },
];

export const COLORS_FILTER = [
  {
    color: "#00c12b",
    border: "#26a943",
    name: "green",
  },
  {
    color: "#F50606",
    border: "#c40505",
    name: "red",
  },
  {
    color: "#F5DD06",
    border: "#c4b105",
    name: "yellow",
  },
  {
    color: "#F57906",
    border: "#c46105",
    name: "orange",
  },
  {
    color: "#06CAF5",
    border: "#05a2c4",
    name: "light-blue",
  },
  {
    color: "#063AF5",
    border: "#052ec4",
    name: "blue",
  },
  {
    color: "#7D06F5",
    border: "#6405c4",
    name: "purple",
  },
  {
    color: "#F506A4",
    border: "#c40583",
    name: "pink",
  },
  {
    color: "#000000",
    border: "#000000",
    name: "black",
  },
  {
    color: "#FFFFFF",
    border: "#CCCCCC  ",
    name: "white",
  },
];

export const SIZES_FILTER = [
  {
    value: "small",
    label: "Small",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "large",
    label: "Large",
  },
  {
    value: "x-large",
    label: "X-Large",
  },
];
