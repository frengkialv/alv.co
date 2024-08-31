"use client";
import React from "react";
import styled from "styled-components";
import { CategoryContext } from "../Provider/CategoryProvider";
import { QUERIES } from "@/constants";
import FilterLogo from "../SVG/FilterLogo";
import DialogMenu from "../DialogMenu";
import Accordion from "../Accordion";
import ColorFilter from "../ColorFilter";
import Slider from "../Slider";
import SizeFilter from "../SizeFilter";
import Button from "../Button";

function FilterContent() {
  return (
    <>
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
      <Button size="small" grow={true}>
        Apply Filter
      </Button>
    </>
  );
}

function FilterSidebarTablet() {
  const { showFilterTablet, setShowFilterTablet } =
    React.useContext(CategoryContext);

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
        children={<FilterContent />}
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
