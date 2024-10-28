import { CartType } from "./types/cart";

export function ratingCalculation(rating: number) {
  const result = [];
  const floorValue = Math.floor(rating);

  for (let index = 0; index < floorValue; index++) {
    result.push(100);
  }

  if (rating !== 5) {
    const restOfSubtraction = Math.floor((rating - floorValue) * 100);
    result.push(restOfSubtraction);
  }

  return result;
}

export function formatDiscountPrice(price: number, discountPercent: number) {
  const result = price - (price * discountPercent) / 100;

  return result;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat().format(price);
}

export function formatTotalPriceCart(datas: CartType[]) {
  let nextTotalPrice = 0;

  datas.forEach((data) => {
    if (data.product.discountByPercent !== null) {
      nextTotalPrice +=
        (data.product.price -
          (data.product.price * data.product.discountByPercent) / 100) *
        data.quantity;
    } else {
      nextTotalPrice += data.product.price * data.quantity;
    }
  });

  return nextTotalPrice;
}

export function capitalizeFirstLetter(str: string) {
  return str
    .split(" ") // Split string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words back together
}

export function truncateString(str: string, truncateLength: number) {
  if (str.length <= truncateLength) return str;

  // Get the first 30 characters
  let truncated = str.substring(0, truncateLength);

  // Find the last space to avoid cutting off a word
  let lastSpaceIndex = truncated.lastIndexOf(" ");

  // If there's a space, truncate at the last word
  if (lastSpaceIndex > -1) {
    truncated = truncated.substring(0, lastSpaceIndex);
  }

  return truncated;
}
