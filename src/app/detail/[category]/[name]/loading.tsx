"use client";
import * as React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import { Wrapper } from "./style";
import { QUERIES } from "@/constants";

function DetailPageLoading() {
  return (
    <Wrapper style={{ marginTop: "10px" }}>
      <BreadCrumbsSkeletonDektop>
        <Skeleton
          variant="text"
          height={40}
          width={400}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </BreadCrumbsSkeletonDektop>
      <BreadCrumbsSkeletonPhone>
        <Skeleton
          variant="text"
          height={40}
          width={200}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </BreadCrumbsSkeletonPhone>

      <ContentWrapperSkeleton>
        <ImageWrapperSkeleton>
          <ImageSelectSkeletonDekstop>
            <Skeleton
              variant="rounded"
              height="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </ImageSelectSkeletonDekstop>

          <ImageSelectSkeletonTablet>
            <Skeleton
              variant="rounded"
              height={200}
              width="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={200}
              width="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={200}
              width="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </ImageSelectSkeletonTablet>

          <ImageDisplaySkeletonDekstop>
            <Skeleton
              variant="rounded"
              height="100%"
              width="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </ImageDisplaySkeletonDekstop>

          <ImageDisplaySkeletonTablet>
            <Skeleton
              variant="rounded"
              height={500}
              width="100%"
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </ImageDisplaySkeletonTablet>
        </ImageWrapperSkeleton>

        <ProductContentWrapper>
          <ColumnSkeleton>
            <Skeleton
              variant="text"
              width={80}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="text"
              width={300}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="text"
              width={180}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="text"
              width={60}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="rounded"
              width="100%"
              height={60}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </ColumnSkeleton>
          <ColumnSkeleton>
            <Skeleton
              variant="text"
              width={120}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="text"
              width={320}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <Skeleton
              variant="text"
              width={320}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
          </ColumnSkeleton>
          <ColumnSkeleton>
            <Skeleton
              variant="text"
              width={120}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: "#F3F0F1" }}
              />
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: "#F3F0F1" }}
              />
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </div>
          </ColumnSkeleton>
          <ColumnSkeleton>
            <Skeleton
              variant="text"
              width={120}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
            />
            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <Skeleton
                variant="rounded"
                width={90}
                height={30}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
              <Skeleton
                variant="rounded"
                width={90}
                height={30}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
              <Skeleton
                variant="rounded"
                width={90}
                height={30}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
              <Skeleton
                variant="rounded"
                width={90}
                height={30}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1" }}
              />
            </div>
          </ColumnSkeleton>
          <ColumnSkeleton>
            <div style={{ display: "flex", gap: "12px" }}>
              <Skeleton
                variant="text"
                width={120}
                height={70}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
              />
              <Skeleton
                variant="text"
                width="100%"
                height={70}
                animation="wave"
                sx={{ bgcolor: "#F3F0F1", fontSize: "1.5rem" }}
              />
            </div>
          </ColumnSkeleton>
        </ProductContentWrapper>
      </ContentWrapperSkeleton>
    </Wrapper>
  );
}

const BreadCrumbsSkeletonDektop = styled.div`
  display: revert;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const BreadCrumbsSkeletonPhone = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;

const ContentWrapperSkeleton = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 10px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageWrapperSkeleton = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  gap: 14px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
  }
`;

const ImageSelectSkeletonDekstop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const ImageSelectSkeletonTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    flex: 1;
    display: flex;
    flex: none;
    gap: 8px;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`;

const ImageDisplaySkeletonDekstop = styled.div`
  flex: 3;
  border-radius: 14px;
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const ImageDisplaySkeletonTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    flex: 3;
    border-radius: 14px;
    overflow: hidden;
  }
`;

const ProductContentWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const ColumnSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;

  &:first-of-type {
    padding-top: 0;
  }

  &:not(&:last-of-type) {
    padding-bottom: 15px;
    border-bottom: 1px solid #dad8d8;
  }
`;

export default DetailPageLoading;
