"use client";
import React from "react";
import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";
import DialogMenu from "../DialogMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SortIcon from "../SVG/SortIcon";
import { QUERIES, SortOptions, WEIGHT } from "@/constants";
import { CategoryContext } from "../Provider/CategoryProvider";

const FormRadioGroup = ({
  sort,
  setSort,
}: {
  sort: string;
  setSort: (val: string) => void;
}) => {
  return (
    <WrapperRadioGroup>
      <RadioGroupRoot
        aria-label="View density"
        value={sort}
        onValueChange={setSort}
      >
        {SortOptions.map((sortOption, index) => {
          return (
            <RadioGroupWrapper key={index}>
              <RadioGroupItem
                id={`index + ${sortOption.value}`}
                value={sortOption.value}
                checked={sort === sortOption.value}
              >
                <RadioGroupIndicator />
              </RadioGroupItem>
              <LabelItem
                htmlFor={`index + ${sortOption.value}`}
                onClick={() => setSort(sortOption.value)}
              >
                {sortOption.label}
              </LabelItem>
            </RadioGroupWrapper>
          );
        })}
      </RadioGroupRoot>
    </WrapperRadioGroup>
  );
};

function SortWrapperCategoryPage() {
  const [showDialogMenu, setShowDialogMenu] = React.useState<boolean>(false);
  const { sort, onChangeSortHandler } = React.useContext(CategoryContext);

  const handleChangeSort = (val: string) => {
    onChangeSortHandler(val);

    setTimeout(() => {
      setShowDialogMenu(false);
    }, 1000);
  };

  const sortSelected = SortOptions.filter(
    (sortOption) => sortOption.value === sort
  );

  return (
    <Wrapper>
      <ButtonDekstopWrapper>
        Sort by:
        <ButtonDekstop onClick={() => setShowDialogMenu(true)}>
          {sortSelected[0].label}
          <Icon id="chevron-down" size={18} strokeWidth={2} />
        </ButtonDekstop>
      </ButtonDekstopWrapper>

      <ButtonTablet onClick={() => setShowDialogMenu(true)}>
        Sort
        <SortIcon width="14px" color="black" />
      </ButtonTablet>

      <DialogMenu
        title="Sort"
        open={showDialogMenu}
        onOpenChange={setShowDialogMenu}
      >
        <FormRadioGroup sort={sort} setSort={handleChangeSort} />
      </DialogMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ButtonDekstopWrapper = styled.div`
  display: flex;
  gap: 5px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const ButtonTablet = styled.button`
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
    padding: 6px 8px;
  }
`;

const ButtonDekstop = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;
  color: var(--color-black);
  font-weight: 600;
`;

const WrapperRadioGroup = styled.form``;

const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RadioGroupItem = styled(RadioGroup.Item)`
  background-color: white;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-black);
  border-radius: 100%;
  outline-offset: 2px;
`;

const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-black);
  }
`;

const LabelItem = styled.label`
  font-size: calc(14rem / 16);
  font-weight: 500;
  color: var(--color-black);
  text-transform: capitalize;
  line-height: 1;
  user-select: none;
  cursor: pointer;
`;

const SortButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-weight: ${WEIGHT.medium};
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px 16px;
  border: none;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 10px 20px;
  }
`;

export default SortWrapperCategoryPage;
