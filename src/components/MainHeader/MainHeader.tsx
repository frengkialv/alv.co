import React from "react";
import Logo from "../Logo";
import NavigationContent from "../NavigationContent";
import SearchInput from "../SearchInput";
import ActionHeader from "../ActionHeader";
import NavigationMobileTrigger from "../NavigationMobileTrigger";
import { LogoWrapper, Wrapper, WrapperSearchInput } from "./style";

function MainHeader() {
  return (
    <Wrapper>
      <LogoWrapper>
        <NavigationMobileTrigger />
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
