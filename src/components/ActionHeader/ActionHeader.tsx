"use client";
import React from "react";
import styled from "styled-components";
import { HeaderContext } from "../Provider/HeaderProvider";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import UnstyledButton from "../UnstyledButton";
import HoverCard from "../HoverCard";
import { QUERIES } from "@/constants";
import ProfileDropdownContent, {
  AvatarPofile,
} from "../ProfileDropdownContent";
import CartContent, { CartIconTrigger } from "../CartContent";

function ActionHeader() {
  const { setShowSearchModal } = React.useContext(HeaderContext);

  return (
    <ActionWrapper>
      <Tooltip text="Search">
        <SearchButton onClick={() => setShowSearchModal(true)}>
          <Icon id="search" strokeWidth={2.5} size={24} />
        </SearchButton>
      </Tooltip>
      <HoverCard trigger={<CartIconTrigger />} sideOffsite={10}>
        <CartContent />
      </HoverCard>

      <WrapperProfileDropdownDekstop>
        <HoverCard trigger={<AvatarPofile />}>
          <ProfileDropdownContent />
        </HoverCard>
      </WrapperProfileDropdownDekstop>

      <WrapperProfileDropdownTablet href="/profile">
        <AvatarPofile />
      </WrapperProfileDropdownTablet>
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 18px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: auto;
    gap: 16px;
  }
`;

const SearchButton = styled(UnstyledButton)`
  display: none;
  user-select: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    margin-right: -5px;
  }
`;

const WrapperProfileDropdownDekstop = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const WrapperProfileDropdownTablet = styled.a`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

export default ActionHeader;
