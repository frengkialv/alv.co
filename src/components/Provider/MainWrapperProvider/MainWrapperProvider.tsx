"use client";
import React from "react";
import { ChildrenProps } from "@/type";
import { useWindowSize } from "@/hooks/useWindowSize";

interface MainWrapperContextValue {
  width: number;
}

export const MainWrapperContext = React.createContext<MainWrapperContextValue>(
  null!
);

function MainWrapperProvider({ children }: ChildrenProps) {
  const { width } = useWindowSize();

  const value = {
    width,
  };

  return (
    <MainWrapperContext.Provider value={value}>
      {children}
    </MainWrapperContext.Provider>
  );
}

export default MainWrapperProvider;
