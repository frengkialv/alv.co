import React from "react";
import SortIcon from "../SVG/SortIcon";
import { Column, ContentWrapper, Header, Wrapper } from "./style";
import Accordion from "../Accordion";
import Slider from "../Slider";

function FilterSidebar() {
  const accordionItems = [
    {
      value: "item-1",
      header: "Accordion Item 1",
      children: <div>This is the content of the first item.</div>,
    },
    {
      value: "item-2",
      header: "Accordion Item 2",
      children: <div>This is the content of the second item.</div>,
    },
    {
      value: "item-3",
      header: "Accordion Item 3",
      children: <div>This is the content of the third item.</div>,
    },
  ];

  return (
    <Wrapper>
      <Header>
        Filters
        <SortIcon color="#999999" />
      </Header>
      <ContentWrapper>
        <Column>
          <Accordion value="item-3" header="Price" children={<Slider />} />
        </Column>
        <Column>
          <Accordion value="item-3" header="Price" children={<Slider />} />
        </Column>
      </ContentWrapper>
    </Wrapper>
  );
}

export default FilterSidebar;
