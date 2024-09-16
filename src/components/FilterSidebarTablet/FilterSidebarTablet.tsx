"use client";
import React from "react";
import styled from "styled-components";
import FilterLogo from "../SVG/FilterLogo";
import DialogMenu from "../DialogMenu";
import Accordion from "../Accordion";
import ColorFilter from "../ColorFilter";
import Slider from "../Slider";
import SizeFilter from "../SizeFilter";
import Button from "../Button";
import { CategoryContext } from "../Provider/CategoryProvider";
import { PropsFilter } from "../FilterSidebarDekstop";
import { QUERIES } from "@/constants";

function FilterContent({
  valuePrice,
  onPriceChange,
  valueColor,
  onColorChange,
  valueSize,
  onSizeChange,
  submitFilter,
}: PropsFilter) {
  return (
    <>
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
      <Button size="small" grow={true} onClick={submitFilter}>
        Apply Filter
      </Button>
    </>
  );
}

function FilterSidebarTablet({
  valuePrice,
  onPriceChange,
  valueColor,
  onColorChange,
  valueSize,
  onSizeChange,
  submitFilter,
}: PropsFilter) {
  const { showFilterTablet, setShowFilterTablet } =
    React.useContext(CategoryContext);

  const handleSubmitFilter = () => {
    submitFilter();

    setTimeout(() => {
      setShowFilterTablet(false);
    }, 1000);
  };

  return (
    <Wrapper>
      <ButtonTrigger onClick={() => setShowFilterTablet(true)}>
        All Filters
        <FilterLogo />
      </ButtonTrigger>

      <DialogMenu
        title="All Filters"
        open={showFilterTablet}
        onOpenChange={setShowFilterTablet}
        children={
          <FilterContent
            valuePrice={valuePrice}
            onPriceChange={onPriceChange}
            valueColor={valueColor}
            onColorChange={onColorChange}
            valueSize={valueSize}
            onSizeChange={onSizeChange}
            submitFilter={handleSubmitFilter}
          />
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const ButtonTrigger = styled.button`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: ${14 / 16}rem;
    padding: 8px;
    color: var(--color-black);
    background-color: var(--color-snow-flake);
    border: 1px solid transparent;
    border-radius: 8px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Column = styled.div`
  padding-top: 18px;

  &:first-child {
    padding-top: 0;
    padding-bottom: 6px;
    margin-top: -12px;
  }
  &:not(&:last-child) {
    padding-bottom: 9px;
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

export default FilterSidebarTablet;
