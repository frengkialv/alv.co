import { differenceInDays } from "date-fns";
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
