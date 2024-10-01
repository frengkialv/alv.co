"use client";
import React from "react";
import styled from "styled-components";
import FilterLogo from "../SVG/FilterLogo";
import DialogMenuCenter from "../DialogMenuCenter";
import Accordion from "../Accordion";
import Slider from "../Slider";
import ColorFilter from "../ColorFilter";
import SizeFilter from "../SizeFilter";
import Button from "../Button";
import { CategoryContext } from "../Provider/CategoryProvider";
import { QUERIES } from "@/constants";

function FilterContent({ submitFilter }: { submitFilter: () => void }) {
  const { currentPath } = React.useContext(CategoryContext);

  return (
    <>
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
        {currentPath !== "on-sale" && currentPath !== "new-arrivals" && (
          <Column>
            <Accordion value="item-3" header="Size">
              <SizeFilter />
            </Accordion>
          </Column>
        )}
      </ContentWrapper>
      <Button size="small" grow={true} onClick={submitFilter}>
        Apply Filter
      </Button>
    </>
  );
}

function FilterSidebarMobile() {
  const { showFilterMobile, setShowFilterMobile, submitFilter } =
    React.useContext(CategoryContext);

  const handleSubmitFilter = () => {
    submitFilter();

    setShowFilterMobile(false);
  };
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
      >
        <FilterContent submitFilter={handleSubmitFilter} />
      </DialogMenuCenter>
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
