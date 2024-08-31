"use client";
import React from "react";
import styled from "styled-components";
import { CategoryContext } from "../Provider/CategoryProvider";
import { QUERIES } from "@/constants";
import FilterLogo from "../SVG/FilterLogo";
import DialogMenuCenter from "../DialogMenuCenter";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
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

function FilterSidebarMobile() {
  const { showFilterMobile, setShowFilterMobile } =
    React.useContext(CategoryContext);

  return (
    <Wrapper>
      <ButtonTrigger onClick={() => setShowFilterMobile(true)}>
        Filters
        <FilterLogo />
      </ButtonTrigger>

      <DialogMenuCenter
        title="All Filters"
        open={showFilterMobile}
        onOpenChange={setShowFilterMobile}
        children={<FilterContent />}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;

const ButtonTrigger = styled.button`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
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
    padding: 6px 8px;
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

export default FilterSidebarMobile;