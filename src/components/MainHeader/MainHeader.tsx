import React from "react";
import Logo from "../Logo";
import NavigationContent from "../NavigationContent";
import SearchInput from "../SearchInput";
import { LogoWrapper, Wrapper, WrapperSearchInput } from "./style";
import ActionHeader from "../ActionHeader";

function MainHeader() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavigationContent />

      <WrapperSearchInput>
        <SearchInput type="search" placeholder="Search for products..." />
      </WrapperSearchInput>

      <ActionHeader />
    </Wrapper>
  );
}

export default MainHeader;
