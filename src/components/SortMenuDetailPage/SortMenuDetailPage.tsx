"use client";
import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { DetailContext } from "../Provider/DetailProvider";
import SortDialogMenu from "../DialogMenu";
import { SortOptions } from "@/constants";
import styled from "styled-components";

const FormRadioGroup = () => {
  const { handleSortChange, sort } = React.useContext(DetailContext);
  return (
    <WrapperRadioGroup>
      <RadioGroupRoot
        aria-label="View density"
        value={sort}
        onValueChange={handleSortChange}
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
                onClick={() => handleSortChange(sortOption.value)}
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

function SortMenuDetailPage() {
  const { showShowDialogMenu, setShowSortDialogMenu } =
    React.useContext(DetailContext);
  return (
    <SortDialogMenu
      title="Sort"
      open={showShowDialogMenu}
      handleShowSortDialogMenu={setShowSortDialogMenu}
      children={<FormRadioGroup />}
    />
  );
}
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

export default SortMenuDetailPage;
