"use client";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import { HeaderContext } from "../Provider/HeaderProvider";
import { QUERIES } from "@/constants";

function NavigationMobileTrigger() {
  const { showNavigationMobile, setshowNavigationMobile } =
    React.useContext(HeaderContext);

  return (
    <>
      <ButtonMenuWrapper onClick={() => setshowNavigationMobile(true)}>
        <Icon id="menu" strokeWidth={2} size={24} />
      </ButtonMenuWrapper>

      <NavigationMobile
        open={showNavigationMobile}
        onOpenChange={setshowNavigationMobile}
      />
    </>
  );
}

export const ButtonMenuWrapper = styled(UnstyledButton)`
  display: none;
  width: 31px;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    margin-bottom: 6px;
  }
`;

export default NavigationMobileTrigger;
