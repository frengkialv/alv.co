import React from "react";
import SortMenuDetailPage from "../SortMenuDetailPage";
import SortButton from "../SortButton";
import RatingCard from "../RatingCard";
import { HeaderTitle, HeaderWrapper, RatingContent, Wrapper } from "./style";

function RatingTab() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>All Reviews</HeaderTitle>
        <SortButton />
      </HeaderWrapper>

      <RatingContent>
        {[1, 2, 3, 4, 5, 6].map((val) => (
          <RatingCard key={val} />
        ))}
      </RatingContent>

      <SortMenuDetailPage />
    </Wrapper>
  );
}

export default RatingTab;
