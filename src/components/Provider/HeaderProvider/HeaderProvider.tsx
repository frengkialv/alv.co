"use client";
import React from "react";
import { ChildrenProps } from "@/types/common";

interface HeaderContextValue {
  showSuperHeader: boolean;
  setShowSuperHeader: (val: boolean) => void;
  showSearchModal: boolean;
  setShowSearchModal: (val: boolean) => void;
  showNavigationMobile: boolean;
  setshowNavigationMobile: (val: boolean) => void;
}

export const HeaderContext = React.createContext<HeaderContextValue>(null!);

function HeaderProvider({ children }: ChildrenProps) {
  const [showSuperHeader, setShowSuperHeader] = React.useState<boolean>(true);
  const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);
  const [showNavigationMobile, setshowNavigationMobile] =
    React.useState<boolean>(false);

  const value = {
    showSuperHeader,
    setShowSuperHeader,
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
