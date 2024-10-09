import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import {
  FeaturedBrandWrapper,
  FeaturedImageWrapper,
  HeaderWrapper,
  List,
  ListWrapper,
  Wrapper,
} from "./styles";

function emptyArray(length: number) {
  const arr = Array.from({ length: length }, (_, i) => i + 1);

  return arr;
}

function BrandsPageLoading() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Skeleton
          variant="text"
          width="60%"
          height={30}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />

        <div style={{ marginBottom: "20px" }} />

        <ListWrapper>
          {emptyArray(60).map((val) => (
            <List key={val}>
              <Skeleton
                variant="text"
                width={150}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1", fontSize: "1rem" }}
              />
            </List>
          ))}
        </ListWrapper>
        <FeaturedBrandWrapper>
          <FeaturedImageWrapper>
            {emptyArray(6).map((val) => (
              <Skeleton
                key={val}
                variant="rectangular"
                width="100%"
                height={150}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            ))}
          </FeaturedImageWrapper>
        </FeaturedBrandWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
}

export default BrandsPageLoading;
