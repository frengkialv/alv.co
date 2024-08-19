import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import SuperHeader from "../SuperHeader";
import MainHeader from "../MainHeader";
import SearchModal from "../SearchModal";

function Header() {
  const [showSuperHeader, setShowSuperHeader] = React.useState<boolean>(true);
  const [showSearchModal, setShowSearchModal] = React.useState<boolean>(false);

  return (
    <Wrapper $superHeader={showSuperHeader}>
      {showSuperHeader && (
        <SuperHeader handleShowSuperHeader={setShowSuperHeader} />
      )}

      <MainHeader handleShowSearchModal={setShowSearchModal} />

      <SearchModal
        open={showSearchModal}
        handleShowSearchModal={setShowSearchModal}
      />
    </Wrapper>
  );
}

const Wrapper = styled.header<{ $superHeader: boolean }>`
  --top: ${(props) => (props.$superHeader ? -44 + "px" : 0)};
  position: sticky;
  top: var(--top);
  z-index: 1;
  @media ${QUERIES.phoneAndSmaller} {
    --top: ${(props) => (props.$superHeader ? -42 + "px" : 0)};
    top: var(--top);
  }
`;

export default Header;
