"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";
import { SortRating } from "@/constants";
import { ChildrenProps } from "@/types/common";
import { ColorProduct, SizeProduct } from "@/types/stock";
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

type ProductState = {
  [key: string]: string;
} & {
  image?: string;
};

export const DetailContext = React.createContext<DetailCentextValue>(null!);

function DetailProvider({ children }: ChildrenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname(); // Get the current pathname
  const isLogin = getCookie("access_token");
  const { fetchDataCart } = React.useContext(CartContext);
  const { showToast } = useToast();

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

  React.useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    const prevParams = Object.fromEntries(searchParams.entries()); // Mengubah searchParams menjadi objek
    const params: ProductState = {};

    for (const [key, value] of Object.entries(prevParams)) {
      params[key] = value;
    }

    if (Object.keys(params).length === 0) {
      return;
    }

    if (params.hasOwnProperty("color")) {
      const nextColorSelected: ColorProduct = params.color as ColorProduct;
      setColorSelected(nextColorSelected);
    }

    if (params.hasOwnProperty("size")) {
      const nextSizeSelected: string = params.size;
      setSizeSelected(nextSizeSelected);
    }
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

export function useUpdateURL() {
  const router = useRouter();

  return (key: "color" | "size", value: ColorProduct | string) => {
    // Jika color berubah otomatis menghapus query size
    if (key === "color") {
      router.push(`?color=${value}`, { scroll: false });
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      const nextSearchParams = Object.fromEntries(searchParams.entries()); // Mengubah searchParams menjadi objek

      router.push(`?color=${nextSearchParams.color}&size=${value}`, {
        scroll: false,
      });
    }
  };
}

export default DetailProvider;
