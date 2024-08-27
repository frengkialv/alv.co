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
