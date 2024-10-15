import React from "react";
import Logo from "../Logo";
import NavigationContent from "../NavigationContent";
import ActionHeader from "../ActionHeader";
import NavigationMobileTrigger from "../NavigationMobileTrigger";
import SearchInputDropdown from "../SearchInputDropdown";
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
        <SearchInputDropdown
          type="search"
          placeholder="Search for products..."
        />
      </WrapperSearchInput>

      <ActionHeader />
    </Wrapper>
  );
}

export default MainHeader;
