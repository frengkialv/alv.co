import React from "react";
import SuperHeader from "../SuperHeader";
import MainHeader from "../MainHeader";
import SearchModal from "../SearchModal";
import { HeaderWrapper } from "./style";

function Header() {
  return (
    <HeaderWrapper>
      <SuperHeader />

      <MainHeader />

      <SearchModal />
    </HeaderWrapper>
  );
}

export default Header;
