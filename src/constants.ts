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
    name: "lightBlue",
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
    color: "#FFA4B6",
    border: "#de909f",
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

export interface SizesType {
  value: string;
  label: string;
  category: string;
}

export const SIZES_FILTER: SizesType[] = [
  {
    value: "small",
    label: "Small",
    category: "t-shirts",
  },
  {
    value: "medium",
    label: "Medium",
    category: "t-shirts",
  },
  {
    value: "large",
    label: "Large",
    category: "t-shirts",
  },
  {
    value: "x-large",
    label: "X-Large",
    category: "t-shirts",
  },
  { value: "40", label: "40", category: "shoes" },
  { value: "41", label: "41", category: "shoes" },
  { value: "42", label: "42", category: "shoes" },
  { value: "43", label: "43", category: "shoes" },
  { value: "44", label: "44", category: "shoes" },
  { value: "one size", label: "One Size", category: "accessories" },
];

interface ColorOption {
  [key: string]: ColorValue;
}

interface ColorValue {
  color: string;
  border: string;
}

export const COLORS_OPTION: ColorOption = {
  black: {
    color: "#000000",
    border: "#000000",
  },
  white: {
    color: "#FFFFFF",
    border: "#817b7b  ",
  },
  gray: {
    color: "#b5b5b5",
    border: "#817b7b  ",
  },
  pink: {
    color: "#F506A4",
    border: "#c40583",
  },
  purple: {
    color: "#7D06F5",
    border: "#6405c4",
  },
  blue: {
    color: "#063AF5",
    border: "#052ec4",
  },
  "light-blue": {
    color: "#06CAF5",
    border: "#05a2c4",
  },
  orange: {
    color: "#F57906",
    border: "#c46105",
  },
  yellow: {
    color: "#F5DD06",
    border: "#c4b105",
  },
  red: {
    color: "#F50606",
    border: "#c40505",
  },
  green: {
    color: "#00c12b",
    border: "#26a943",
  },
};

export const CategoryPathnames = [
  "shoes",
  "t-shirts",
  "accessories",
  "sport",
  "on-sale",
  "new-arrivals",
];
