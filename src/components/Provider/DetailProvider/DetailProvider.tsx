"use client";
import React from "react";
import { ChildrenProps } from "@/type";
import { SortRating } from "@/constants";

interface DetailCentextValue {
  selectedImageId: number;
  setSelectedImageId: (val: number) => void;
  selectedColor: string;
  setSelectedColor: (val: string) => void;
  colors: string[];
  selectedSize: string;
  setSelectedSize: (val: string) => void;
  sizeOptions: string[];
  amountOrder: number;
  setAmountOrder: (val: number) => void;
  sortRating: SortRating;
  setSortRating: (val: SortRating) => void;
}

export const DetailContext = React.createContext<DetailCentextValue>(null!);

function DetailProvider({ children }: ChildrenProps) {
  const [selectedImageId, setSelectedImageId] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState<string>("#4F4631");
  const [colors, setColors] = React.useState<string[]>([
    "#4F4631",
    "#314F4A",
    "#31344F",
  ]);
  const [sizeOptions, setSizeOptions] = React.useState<string[]>([
    "Small",
    "Medium",
    "Large",
    "X-Large",
  ]);
  const [selectedSize, setSelectedSize] = React.useState<string>(
    sizeOptions[0]
  );
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
    selectedColor,
    setSelectedColor,
    colors,
    selectedSize,
    setSelectedSize,
    sizeOptions,
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
