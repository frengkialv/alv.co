"use client";
import React from "react";
import { getCookie } from "cookies-next";
import { ChildrenProps } from "@/types/common";
import { CartType } from "@/types/cart";
import { getCart } from "@/services/cart.service";

interface HeaderContextValue {
  showSearchModal: boolean;
  setShowSearchModal: (val: boolean) => void;
  showNavigationMobile: boolean;
  setshowNavigationMobile: (val: boolean) => void;
}

export const HeaderContext = React.createContext<HeaderContextValue>(null!);

function HeaderProvider({ children }: ChildrenProps) {
  const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
  const [showNavigationMobile, setshowNavigationMobile] =
    React.useState<boolean>(false);

  const value = {
    showSearchModal,
    setShowSearchModal,
    showNavigationMobile,
    setshowNavigationMobile,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

export default HeaderProvider;
