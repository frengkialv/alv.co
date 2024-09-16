"use client";
import React from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ChildrenProps } from "@/types/common";

interface MainWrapperContextValue {
  width: number;
  height: number;
}

export const MainWrapperContext = React.createContext<MainWrapperContextValue>(
  null!
);

function MainWrapperProvider({ children }: ChildrenProps) {
  const { width, height } = useWindowSize();

  const value = {
    width,
    height,
  };

  return (
    <MainWrapperContext.Provider value={value}>
      {children}
    </MainWrapperContext.Provider>
  );
}

export default MainWrapperProvider;
