import React from "react";
import SortIcon from "../SVG/SortIcon";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
import SizeFilter from "../SizeFilter";
import { Column, ContentWrapper, Header } from "./style";
import Button from "../Button";
import FilterSidebarWrapper from "../FilterSidebarWrapper";

function FilterSidebar() {
  return (
    <FilterSidebarWrapper>
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

      <Button size="grow">Apply Filter</Button>
    </FilterSidebarWrapper>
  );
}

export default FilterSidebar;
