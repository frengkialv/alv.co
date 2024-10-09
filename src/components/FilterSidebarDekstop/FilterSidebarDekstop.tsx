"use client";
import React from "react";
import SortIcon from "../SVG/SortIcon";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
import SizeFilter from "../SizeFilter";
import FilterSidebarWrapperDekstop from "../FilterSidebarWrapperDekstop";
import SubmitFilterButton from "../SubmitFilterButton";
import { Column, ContentWrapper, Header } from "./style";
import { CategoryContext } from "../Provider/CategoryProvider";

function FilterSidebarDekstop() {
  const { currentPath } = React.useContext(CategoryContext);

  return (
    <FilterSidebarWrapperDekstop>
      <Header>
        Filters
        <SortIcon color="#999999" />
      </Header>
      <ContentWrapper>
        <Column>
          <Accordion value="item-1" header="Price">
            <Slider />
          </Accordion>
        </Column>
        <Column>
          <Accordion value="item-2" header="Colors">
            <ColorFilter />
          </Accordion>
        </Column>
        {currentPath !== "on-sale" &&
          currentPath !== "new-arrivals" &&
          currentPath !== "brand" && (
            <Column>
              <Accordion value="item-3" header="Size">
                <SizeFilter />
              </Accordion>
            </Column>
          )}
      </ContentWrapper>

      <SubmitFilterButton />
    </FilterSidebarWrapperDekstop>
  );
}

export default FilterSidebarDekstop;
