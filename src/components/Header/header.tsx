import React from "react";
import SuperHeader from "../SuperHeader";
import MainHeader from "../MainHeader";
import SearchModal from "../SearchModal";
import HeaderProvider from "../Provider/HeaderProvider";
import { HeaderWrapper } from "./style";

function Header() {
  return (
    <HeaderProvider>
      <HeaderWrapper>
        <SuperHeader />

        <MainHeader />

        <SearchModal />
      </HeaderWrapper>
    </HeaderProvider>
  );
}

export default Header;
