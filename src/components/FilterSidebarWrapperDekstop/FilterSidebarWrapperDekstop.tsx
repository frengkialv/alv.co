"use client";
import React from "react";
import styled from "styled-components";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";
import { QUERIES } from "@/constants";
import { ChildrenProps } from "@/types/common";

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

function FilterSidebarWrapperDekstop({ children }: ChildrenProps) {
  return <Wrapper className="filter-wrapper">{children}</Wrapper>;
}

const Wrapper = styled.div`
  flex: 1;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  min-width: 280px;
  height: fit-content;
  padding: 20px 24px;
  border: 1px solid var(--color-gray-100);
  border-radius: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default FilterSidebarWrapperDekstop;
