import React from "react";
import SortIcon from "../SVG/SortIcon";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
import SizeFilter from "../SizeFilter";
import FilterSidebarWrapperDekstop from "../FilterSidebarWrapperDekstop";
import SubmitFilterButton from "../SubmitFilterButton";
import { Column, ContentWrapper, Header } from "./style";

function FilterSidebarDekstop() {
  return (
    <FilterSidebarWrapperDekstop>
      <Header>
        Filters
        <SortIcon color="#999999" />
      </Header>
      <ContentWrapper>
        <Column>
          <Accordion value="item-1" header="Price" children={<Slider />} />
        </Column>
        <Column>
          <Accordion
            value="item-2"
            header="Colors"
            children={<ColorFilter />}
          />
        </Column>
        <Column>
          <Accordion value="item-3" header="Size" children={<SizeFilter />} />
        </Column>
      </ContentWrapper>

      <SubmitFilterButton />
    </FilterSidebarWrapperDekstop>
  );
}

export default FilterSidebarDekstop;
