import { subDays } from "date-fns";
import { isNewClothing } from "./utils";

export const getNewestData = (amount) => {
  const datas = CLOTHINGS.filter((clothing) => {
    return isNewClothing(clothing.releaseDate);
  }).slice(0, amount);

  return datas;
};

export const getTopSellingData = (amount) => {
  const datas = CLOTHINGS.sort((a, b) => b.sold - a.sold).slice(0, amount);

  return datas;
};

export const CLOTHING_ORDERS = [
  {
    slug: "t-shirt-with-tape",
    name: "T-shirt With Tape Details",
    imgSrc: "/assets/t-shirt-with-tape.png",
    price: 120,
    discountByPercent: 20,
    quantity: 2,
    size: "Small",
    colors: "Brown",
  },
  {
    slug: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    imgSrc: "/assets/skinny-fit-jeans.png",
    price: 235,
    discountByPercent: null,
    quantity: 1,
    size: "Large",
    colors: "Blue",
  },
  {
    slug: "sleeve-striped-t-shirt",
    name: "Sleeve Striped T-shirt",
    imgSrc: "/assets/sleeve-striped-t-shirt.png",
    price: 160,
    discountByPercent: 10,
    quantity: 1,
    size: "X-Large",
    colors: "Orange",
  },
  {
    slug: "detail",
    name: "Gradient Graphic T-shirt",
    imgSrc: "/assets/gradient-graphic-t-shirt.png",
    price: 145,
    discountByPercent: null,
    quantity: 3,
    size: "Small",
    colors: "Black",
  },
];

export const CLOTHINGS = [
  {
    slug: "t-shirt-with-tape",
    name: "T-shirt With Tape Details",
    imgSrc: "/assets/t-shirt-with-tape.png",
    price: 120,
    rating: 4.5,
    discountByPercent: 20,
    stock: 93,
    sold: 107,
    size: ["Small", "Medium", "X-Large"],
    colors: ["Brown", "Black", "White"],
    releaseDate: subDays(new Date(), 32),
  },
  {
    slug: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    imgSrc: "/assets/skinny-fit-jeans.png",
    price: 235,
    rating: 4,
    discountByPercent: null,
    stock: 17,
    sold: 83,
    size: ["Small", "Large", "X-Large"],
    colors: ["Blue"],
    releaseDate: subDays(new Date(), 32),
  },
  {
    slug: "checkered-shirt",
    name: "Checkered Shirt",
    imgSrc: "/assets/checkered-shirt.png",
    price: 250,
    rating: 4.7,
    discountByPercent: 50,
    stock: 25,
    sold: 175,
    size: ["Large"],
    colors: ["Red"],
    releaseDate: subDays(new Date(), 37),
  },
  {
    slug: "sleeve-striped-t-shirt",
    name: "Sleeve Striped T-shirt",
    imgSrc: "/assets/sleeve-striped-t-shirt.png",
    price: 160,
    rating: 4.2,
    discountByPercent: 10,
    stock: 45,
    sold: 105,
    size: ["Small", "Large", "X-Large"],
    colors: ["Orange"],
    releaseDate: subDays(new Date(), 10),
  },
  {
    slug: "detail",
    name: "Gradient Graphic T-shirt",
    imgSrc: "/assets/gradient-graphic-t-shirt.png",
    price: 145,
    rating: 4.8,
    discountByPercent: null,
    stock: 20,
    sold: 280,
    size: ["Small", "Large", "X-Large"],
    colors: ["White", "Black"],
    releaseDate: subDays(new Date(), 13),
  },
  {
    slug: "vertical-striped-shirt",
    name: "Vertical Striped Shirt",
    imgSrc: "/assets/vertical-striped-shirt.png",
    price: 340,
    rating: 4.3,
    discountByPercent: null,
    stock: 27,
    sold: 180,
    size: ["Large", "X-Large"],
    colors: ["Green"],
    releaseDate: subDays(new Date(), 40),
  },
  {
    slug: "courage-graphic-t-shirt",
    name: "Courage-Graphic T-shirt",
    imgSrc: "/assets/courage-graphic-t-shirt.png",
    price: 140,
    rating: 4.7,
    discountByPercent: null,
    stock: 30,
    sold: 100,
    size: ["Small"],
    colors: ["Orange"],
    releaseDate: subDays(new Date(), 23),
  },
  {
    slug: "loose-fit-bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    imgSrc: "/assets/loose-fit-bermuda-shorts.png",
    price: 80,
    rating: 4.5,
    discountByPercent: 10,
    stock: 20,
    sold: 130,
    size: ["Large"],
    colors: ["Orange"],
    releaseDate: subDays(new Date(), 68),
  },
  {
    slug: "faded-skinny-jeans",
    name: "Faded Skinny Jeans",
    imgSrc: "/assets/faded-skinny-jeans.png",
    price: 210,
    rating: 5,
    discountByPercent: null,
    stock: 30,
    sold: 120,
    size: ["Small", "Medium"],
    colors: ["Orange"],
    releaseDate: subDays(new Date(), 18),
  },
];

export const TESTIMONIALS = [
  {
    name: "Gerard Way",
    rating: 5,
    testimonial:
      "I'm blown away by the quality and style of the clothes I received from ALV.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex Kevin",
    rating: 5,
    testimonial:
      "Finding clothes that align with my personal style used to be a challenge until I discovered ALV.CO. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James Hilton",
    rating: 5,
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, i'm thrilled to have stumbled upon ALV.CO. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emily Ross",
    rating: 5,
    testimonial:
      "Shopping here is always a pleasure. The clothes are stylish, fit perfectly, and arrive quickly. I’ve recommended this site to all my friends. Exceptional quality and service!",
  },
  {
    name: "Hawa Maryam",
    rating: 5,
    testimonial:
      "This site offers fantastic fashion choices with unmatched quality. Every purchase has been a hit. The ease of online shopping and fast delivery keeps me coming back.",
  },
  {
    name: "David Lee",
    rating: 5,
    testimonial:
      "I’m thrilled with every order. The clothing is trendy, well-made, and always arrives on time. This is my favorite place to shop for fashion online. Highly recommended!",
  },
  {
    name: "Liam Roberts",
    rating: 5,
    testimonial:
      "Great selection, excellent quality, and prompt delivery. This e-commerce site has it all. Every item I’ve bought has exceeded my expectations. I wouldn’t shop anywhere else for fashion.",
  },
  {
    name: "Chloe Mitchell",
    rating: 5,
    testimonial:
      "I love the convenience of shopping here. The clothes are always exactly as described and fit perfectly. The customer service is outstanding. I’m a loyal customer for life!",
  },
];
