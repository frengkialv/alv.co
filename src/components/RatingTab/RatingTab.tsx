import React from "react";
import SortButtonRating from "../SortButtonRating";
import RatingCard from "../RatingCard";
import { HeaderTitle, HeaderWrapper, RatingContent, Wrapper } from "./style";

function RatingTab() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>All Reviews</HeaderTitle>
        <SortButtonRating />
      </HeaderWrapper>

      <RatingContent>
        {[1, 2, 3, 4, 5, 6].map((val) => (
          <RatingCard key={val} />
        ))}
      </RatingContent>
    </Wrapper>
  );
}

export default RatingTab;
