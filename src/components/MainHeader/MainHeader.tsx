import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Icon from "../Icon";
import NavigationContent from "../NavigationContent";
import { QUERIES } from "@/constants";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Tooltip from "../Tooltip";

function MainHeader({
  handleShowSearchModal,
}: {
  handleShowSearchModal: (val: boolean) => void;
}) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavigationContent />

      <WrapperSearchInput>
        <SearchInput type="search" placeholder="Search for products..." />
      </WrapperSearchInput>

      <ActionWrapper>
        <Tooltip text="Search">
          <SearchButton onClick={() => handleShowSearchModal(true)}>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: var(--color-white);
  padding: 20px clamp(1rem, 14vw - 5rem, 6.25rem);

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

const LogoWrapper = styled.div`
  --font-size: ${32 / 16}rem;
  margin-top: 5px;

  @media ${QUERIES.phoneAndSmaller} {
    --font-size: ${28 / 16}rem;
  }
`;

const WrapperSearchInput = styled.div`
  flex: 1;
  min-width: 250px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SearchButton = styled(UnstyledButton)`
  display: none;
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: auto;
    gap: 12px;
  }
`;

export default MainHeader;
