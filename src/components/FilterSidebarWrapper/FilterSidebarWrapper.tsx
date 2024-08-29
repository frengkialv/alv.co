"use client";
import React from "react";
import styled from "styled-components";
import { ChildrenProps } from "@/type";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = React.useState<string>("down");

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDir &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDir(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => {
      window.removeEventListener("scroll", updateScrollDir);
    };
  }, [scrollDir]);

  return scrollDir;
};

const useFilterSidebarContent = () => {
  const [filterHeight, setFilterHeight] = React.useState<number>(0);

  React.useEffect(() => {
    // Call handler right away so state gets updated with initial window size
    handlerFilterWrapperHeight();

    function handlerFilterWrapperHeight() {
      const displayHeight =
        document.querySelector(".filter-wrapper")?.clientHeight;

      if (displayHeight && !isNaN(displayHeight)) {
        setFilterHeight(displayHeight);
      }
    }
    // Add event listener
    window.addEventListener("resize", handlerFilterWrapperHeight);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handlerFilterWrapperHeight);
    };
  }, []);

  return filterHeight;
};

const useBodyHeight = () => {
  const [bodyHeight, setBodyHeight] = React.useState<number>(0);

  React.useEffect(() => {
    // Function to update body height
    const updateBodyHeight = () => {
      if (typeof window !== "undefined") {
        setBodyHeight(document.body.scrollHeight);
      }
    };

    // Update height on mount
    updateBodyHeight();

    // Optionally, you can update the height on window resize
    window.addEventListener("resize", updateBodyHeight);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateBodyHeight);
    };
  }, []);

  return bodyHeight;
};

function FilterSidebarWrapper({ children }: ChildrenProps) {
  const scrollDirection = useScrollDirection();
  const filterHeight = useFilterSidebarContent();

  const { height } = React.useContext(MainWrapperContext);

  const top = `-${filterHeight - height + 10}px`;
  return (
    <Wrapper
      className="filter-wrapper"
      $top={top}
      $scrollDirection={scrollDirection}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $top: string; $scrollDirection: string }>`
  flex: 1;
  position: sticky;
  position: -webkit-sticky;
  top: ${(props) => props.$top};
  min-width: 280px;
  height: fit-content;
  padding: 20px 24px;
  border: 1px solid var(--color-gray-100);
  border-radius: 20px;
`;

export default FilterSidebarWrapper;
