"use client";
import React from "react";
import { getCookie } from "cookies-next";
import { SortRating } from "@/constants";
import { ChildrenProps } from "@/types/common";
import { ColorProduct, SizeProduct } from "@/types/stock";
import { usePathname, useRouter } from "next/navigation";
import { addCart } from "@/services/cart.service";
import { useToast } from "../ToastProvider";
import { CartContext } from "../CartProvider";

interface DetailCentextValue {
  selectedImageId: number;
  setSelectedImageId: (val: number) => void;

  isLoading: boolean;
  setIsLoading: (val: boolean) => void;

  colorSelected: ColorProduct | undefined;
  setColorSelected: (color: ColorProduct) => void;

  sizeSelected: string;
  setSizeSelected: (size: string) => void;

  stockLeft: number | undefined;
  setStockLeft: (val: number) => void;

  amountOrder: number;
  setAmountOrder: (val: number) => void;
  sortRating: SortRating;
  setSortRating: (val: SortRating) => void;

  submitHandler: (productId: string) => void;
}

export const DetailContext = React.createContext<DetailCentextValue>(null!);

function DetailProvider({ children }: ChildrenProps) {
  const router = useRouter();
  const isLogin = getCookie("access_token");

  const { fetchDataCart } = React.useContext(CartContext);
  const { showToast } = useToast();

  const pathName = usePathname(); // Get the current pathname

  const [currentPath, setCurrentPath] = React.useState<string>("");

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [selectedImageId, setSelectedImageId] = React.useState(1);

  const [colorSelected, setColorSelected] = React.useState<
    ColorProduct | undefined
  >(undefined);

  const [sizeSelected, setSizeSelected] = React.useState<string>("");

  const [stockLeft, setStockLeft] = React.useState<number | undefined>(
    undefined
  );

  const [amountOrder, setAmountOrder] = React.useState<number>(1);

  const [sortRating, setSortRating] = React.useState<SortRating>(
    SortRating.ASCENDING
  );

  React.useEffect(() => {
    if (pathName !== currentPath) {
      setCurrentPath(pathName);
      resetAllSatte();
    }
  }, [pathName]);

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

  const resetAllSatte = () => {
    setSelectedImageId(1);
    setColorSelected(undefined);
    setSizeSelected("");
    setStockLeft(undefined);
    setAmountOrder(1);
    setSortRating(SortRating.ASCENDING);
  };

  const submitHandler = async (productId: string) => {
    try {
      setIsLoading(true);

      if (!isLogin) {
        router.push("/login");
        return;
      }

      const resp = await addCart({
        productId,
        quantity: amountOrder,
        color: colorSelected!,
        size: sizeSelected as SizeProduct,
      });

      if (resp.message === "Successfully create or update cart") {
        showToast({
          type: "success",
          title: "Success!",
          description: "Success add item to the cart.",
        });

        setTimeout(() => {
          router.refresh();
        }, 200);
      }
    } catch (error) {
      showToast({
        type: "error",
        title: "Error!",
        description:
          "Your order exceeds available stock. Please check your cart.",
      });
    } finally {
      await fetchDataCart();
      setIsLoading(false);
    }
  };

  const value = {
    selectedImageId,
    setSelectedImageId,

    isLoading,
    setIsLoading,

    colorSelected,
    setColorSelected,

    sizeSelected,
    setSizeSelected,

    stockLeft,
    setStockLeft,

    amountOrder,
    setAmountOrder,
    sortRating,
    setSortRating,

    submitHandler,
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
