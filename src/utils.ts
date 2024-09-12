import { differenceInDays } from "date-fns";

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

export function isNewClothing(releaseDate: Date) {
  return differenceInDays(new Date(), releaseDate) < 30;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat().format(price);
}
