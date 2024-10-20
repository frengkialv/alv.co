"use client";
import React from "react";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { Wrapper as ProductWrapper } from "../ProductGrid/style";
import { SpacerNewArrival, Wrapper } from "../SuggestionProduct/style";
import { Row } from "../ProductList/style";
import { QUERIES } from "@/constants";

function SkeletonLoadingSuggestionProduct() {
  const arr = new Array(4).fill(0);

  return (
    <Wrapper>
      <SpacerNewArrival />

      <Skeleton
        variant="text"
        width={300}
        height={50}
        animation="wave"
        sx={{ bgcolor: "#F3F0F1" }}
      />

      <ProductWrapper style={{ paddingTop: "10px" }}>
        {arr.map((val, index) => (
          <ProductListWrapper key={index}>
            {/* For Image */}
            <DekstopContent>
              <Skeleton
                variant="rounded"
                height={330}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </DekstopContent>

            <TabletContent>
              <Skeleton
                variant="rounded"
                height={280}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </TabletContent>

            <PhoneContent>
              <Skeleton
                variant="rounded"
                height={222}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </PhoneContent>

            <Row
              style={{
                marginTop: "16px",
              }}
            >
              <Skeleton
                variant="rounded"
                height={20}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />

              <Skeleton
                variant="rounded"
                height={20}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />

              <Skeleton
                variant="rounded"
                height={20}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </Row>
          </ProductListWrapper>
        ))}
      </ProductWrapper>
    </Wrapper>
  );
}

const DekstopContent = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletContent = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const PhoneContent = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-black);
`;

export default SkeletonLoadingSuggestionProduct;
