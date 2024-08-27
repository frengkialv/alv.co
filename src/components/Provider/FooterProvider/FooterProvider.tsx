"use client";
import React from "react";
import { ChildrenProps } from "@/type";

interface FooterCentextValue {
  subscriberWrapperHeight: number;
  setSubscriberWrapperHeight: (val: number) => void;
}

export const FooterContext = React.createContext<FooterCentextValue>(null!);

function FooterProvider({ children }: ChildrenProps) {
  const [subscriberWrapperHeight, setSubscriberWrapperHeight] =
    React.useState<number>(0);

  React.useEffect(() => {
    // Call handler right away so state gets updated with initial window size
    handlerSubscriberWrapperHeightt();

    function handlerSubscriberWrapperHeightt() {
      const displayHeight =
        document.querySelector(".subscribe-wrapper")?.clientHeight;

      if (displayHeight && !isNaN(displayHeight)) {
        setSubscriberWrapperHeight(displayHeight);
      }
    }
    // Add event listener
    window.addEventListener("resize", handlerSubscriberWrapperHeightt);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handlerSubscriberWrapperHeightt);
    };
  }, []);

  const value = {
    subscriberWrapperHeight,
    setSubscriberWrapperHeight,
  };

  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
}

export default FooterProvider;
