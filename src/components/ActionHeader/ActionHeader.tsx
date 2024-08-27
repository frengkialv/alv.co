"use client";
import React from "react";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "@/constants";
import Tooltip from "../Tooltip";
import Icon from "../Icon";
import { HeaderContext } from "../Provider/HeaderProvider";

function ActionHeader() {
  const { setShowSearchModal } = React.useContext(HeaderContext);

  return (
    <ActionWrapper>
      <Tooltip text="Search">
        <SearchButton onClick={() => setShowSearchModal(true)}>
          <Icon id="search" strokeWidth={2.5} size={24} />
        </SearchButton>
      </Tooltip>
      <Tooltip text="Shopping Cart">
        <UnstyledButton>
          <Icon id="shopping-cart" strokeWidth={2.5} size={22} />
        </UnstyledButton>
      </Tooltip>
      <Tooltip text="Profile">
        <UnstyledButton>
          <Icon id="user" strokeWidth={2.5} size={22} />
        </UnstyledButton>
      </Tooltip>
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: auto;
    gap: 12px;
  }
`;

const SearchButton = styled(UnstyledButton)`
  display: none;
  user-select: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }
`;

export default ActionHeader;
