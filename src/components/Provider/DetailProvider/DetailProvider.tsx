"use client";
import React from "react";
import { ChildrenProps, OptionsType } from "@/type";
import { SortOptions } from "@/constants";

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
  showShowDialogMenu: boolean;
  setShowSortDialogMenu: (val: boolean) => void;
  handleSortChange: (val: string) => void;
  sort: string;
  setSort: (val: string) => void;
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

  const [showShowDialogMenu, setShowSortDialogMenu] =
    React.useState<boolean>(false);
  const [sort, setSort] = React.useState<string>("popularity");

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

  const handleSortChange = (val: string) => {
    console.log("🚀 ~ handleSortChange ~ val:", val);
    setSort(val);
    setTimeout(() => {
      setShowSortDialogMenu(false);
    }, 500);
  };

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
    showShowDialogMenu,
    setShowSortDialogMenu,
    handleSortChange,
    sort,
    setSort,
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
