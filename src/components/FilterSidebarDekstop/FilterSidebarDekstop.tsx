import React from "react";
import SortIcon from "../SVG/SortIcon";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
import SizeFilter from "../SizeFilter";
import Button from "../Button";
import FilterSidebarWrapperDekstop from "../FilterSidebarWrapperDekstop";
import { Column, ContentWrapper, Header } from "./style";

export interface PropsFilter {
  valuePrice: number[];
  onPriceChange: (val: number[]) => void;
  valueColor: string[];
  onColorChange: (val: string[]) => void;
  valueSize: string[];
  onSizeChange: (val: string[]) => void;
  submitFilter: () => void;
}

function FilterSidebarDekstop({
  valuePrice,
  onPriceChange,
  valueColor,
  onColorChange,
  valueSize,
  onSizeChange,
  submitFilter,
}: PropsFilter) {
  return (
    <FilterSidebarWrapperDekstop>
      <Header>
        Filters
        <SortIcon color="#999999" />
      </Header>
      <ContentWrapper>
        <Column>
          <Accordion
            value="item-1"
            header="Price"
            children={
              <Slider value={valuePrice} onValueChange={onPriceChange} />
            }
          />
        </Column>
        <Column>
          <Accordion
            value="item-2"
            header="Colors"
            children={
              <ColorFilter value={valueColor} onValueChange={onColorChange} />
            }
          />
        </Column>
        <Column>
          <Accordion
            value="item-3"
            header="Size"
            children={
              <SizeFilter value={valueSize} onValueChange={onSizeChange} />
            }
          />
        </Column>
      </ContentWrapper>

      <Button grow={true} onClick={submitFilter}>
        Apply Filter
      </Button>
    </FilterSidebarWrapperDekstop>
  );
}

export default FilterSidebarDekstop;
