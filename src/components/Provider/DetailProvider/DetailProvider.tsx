"use client";
import React from "react";
import { SortRating } from "@/constants";
import { ChildrenProps } from "@/types/common";

interface DetailCentextValue {
  selectedImageId: number;
  setSelectedImageId: (val: number) => void;
  amountOrder: number;
  setAmountOrder: (val: number) => void;
  sortRating: SortRating;
  setSortRating: (val: SortRating) => void;
}

export const DetailContext = React.createContext<DetailCentextValue>(null!);

function DetailProvider({ children }: ChildrenProps) {
  const [selectedImageId, setSelectedImageId] = React.useState(1);
  const [amountOrder, setAmountOrder] = React.useState<number>(1);

  const [sortRating, setSortRating] = React.useState<SortRating>(
    SortRating.ASCENDING
  );

  React.useEffect(() => {
    slideImage();

    function slideImage() {
      const displayWidth: number = document.querySelector(
        ".image-showcase img:first-child"
      )?.clientWidth as number;

      const slideHandler =
        document.querySelector<HTMLElement>(".image-showcase");

      if (slideHandler) {
        slideHandler.style.transform = `translateX(${
          -(selectedImageId - 1) * displayWidth
        }px)`;
      }
    }

    window.addEventListener("resize", slideImage);

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [selectedImageId]);

  const value = {
    selectedImageId,
    setSelectedImageId,
    amountOrder,
    setAmountOrder,
    sortRating,
    setSortRating,
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
