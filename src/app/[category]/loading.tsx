"use client";
import * as React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Wrapper } from "./style";
import { QUERIES } from "@/constants";

function CategoryPageLoading() {
  const arr = new Array(10).fill(0);
  return (
    <Wrapper>
      <ContentWrapperSkeleton>
        <FilterSidebarWrapperDekstopSkeleton>
          <Skeleton
            variant="text"
            height={80}
            animation="wave"
            sx={{ bgcolor: "#F3F0F1" }}
          />

          <Stack spacing={2}>
            <Skeleton
              variant="rectangular"
              height={100}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rectangular"
              height={180}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rectangular"
              height={160}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </Stack>
        </FilterSidebarWrapperDekstopSkeleton>

        <div style={{ flex: 4 }}>
          <MainGridSkeleton>
            {arr.map((val, index) => (
              <ProductListWrapperStyleSkeleton key={index}>
                <ImageWrapperSkeleton>
                  <Skeleton
                    variant="rounded"
                    height="100%"
                    animation="wave"
                    sx={{ bgcolor: "#F3F0F1" }}
                  />
                </ImageWrapperSkeleton>

                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.2rem", bgcolor: "#F3F0F1" }}
                  animation="wave"
                />

                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.2rem", bgcolor: "#F3F0F1" }}
                  animation="wave"
                />

                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.4rem", bgcolor: "#F3F0F1" }}
                  animation="wave"
                />
              </ProductListWrapperStyleSkeleton>
            ))}
          </MainGridSkeleton>
        </div>
      </ContentWrapperSkeleton>
    </Wrapper>
  );
}

const ContentWrapperSkeleton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

const FilterSidebarWrapperDekstopSkeleton = styled.div`
  flex: 1;
  padding: 15px 24px;
  border: 1px solid var(--color-gray-100);
  border-radius: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainGridSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 30px 20px;
  padding-bottom: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
`;

const ProductListWrapperStyleSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapperSkeleton = styled.div`
  height: 380px;

  @media ${QUERIES.tabletAndSmaller} {
    height: 300px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    height: 260px;
  }
`;

export default CategoryPageLoading;
