"use client";
import * as React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { QUERIES } from "@/constants";

function HomePageLoading() {
  const arr = (val: number) => {
    return new Array(val).fill(0);
  };

  return (
    <Wrapper>
      <SkeletonDekstop>
        <Skeleton
          variant="rounded"
          height={630}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonDekstop>

      <SkeletonTablet>
        <Skeleton
          variant="text"
          height={50}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="text"
          height={50}
          // width={300}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="text"
          height={30}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="rounded"
          height={600}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonTablet>

      <SkeletonPhone>
        <Skeleton
          variant="text"
          height={50}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="text"
          height={50}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="text"
          height={30}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
        <Skeleton
          variant="rounded"
          height={600}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonPhone>

      <SkeletonDekstop
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonDekstop>

      <SkeletonTablet
        style={{
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonTablet>

      <SkeletonPhone
        style={{
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={300}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonPhone>

      <ProductDekstop>
        {arr(4).map((val, index) => (
          <ProductListWrapper key={index}>
            <Skeleton
              variant="rounded"
              height={351}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={220}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={300}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={180}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
          </ProductListWrapper>
        ))}
      </ProductDekstop>

      <ProductPhone>
        {arr(4).map((val, index) => (
          <ProductListWrapper key={index}>
            <Skeleton
              variant="rounded"
              height={222}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={140}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={120}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
          </ProductListWrapper>
        ))}
      </ProductPhone>

      <SkeletonDekstop
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonDekstop>

      <SkeletonTablet
        style={{
          marginTop: "35px",
          marginBottom: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonTablet>

      <SkeletonPhone
        style={{
          marginTop: "35px",
          marginBottom: "10px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={300}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonPhone>

      <ProductDekstop>
        {arr(4).map((val, index) => (
          <ProductListWrapper key={index}>
            <Skeleton
              variant="rounded"
              height={351}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={220}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={300}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={180}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
          </ProductListWrapper>
        ))}
      </ProductDekstop>

      <ProductPhone>
        {arr(4).map((val, index) => (
          <ProductListWrapper key={index}>
            <Skeleton
              variant="rounded"
              height={222}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={140}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
            <Skeleton
              variant="rounded"
              height={16}
              width={120}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1", marginTop: "10px" }}
            />
          </ProductListWrapper>
        ))}
      </ProductPhone>

      <SkeletonDekstop
        style={{
          marginTop: "55px",
          marginBottom: "20px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonDekstop>

      <SkeletonTablet
        style={{
          marginTop: "55px",
          marginBottom: "20px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={500}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonTablet>

      <SkeletonPhone
        style={{
          marginTop: "55px",
          marginBottom: "20px",
        }}
      >
        <Skeleton
          variant="rounded"
          height={30}
          width={350}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1" }}
        />
      </SkeletonPhone>

      <CommentDesktop>
        {arr(3).map((val, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={225}
            width={448}
            animation="wave"
            sx={{ bgcolor: "#F3F0F1", flex: 1 }}
          />
        ))}
      </CommentDesktop>

      <CommentTablet>
        {arr(2).map((val, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={225}
            width={448}
            animation="wave"
            sx={{ bgcolor: "#F3F0F1", flex: 1 }}
          />
        ))}
      </CommentTablet>

      <CommentPhone>
        <Skeleton
          variant="rounded"
          height={225}
          animation="wave"
          sx={{ bgcolor: "#F3F0F1", flex: 1 }}
        />
      </CommentPhone>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
`;

const SkeletonDekstop = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SkeletonTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const SkeletonPhone = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const ProductDekstop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 30px 20px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const ProductPhone = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 20px;
    overflow: auto;

    // For hide the scrollbar but still scrollable
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari & Chrome */
    }
  }
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CommentDesktop = styled(SkeletonDekstop)`
  display: flex;
  gap: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const CommentTablet = styled(SkeletonTablet)`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 20px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const CommentPhone = styled(SkeletonPhone)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 20px;
  }
`;

export default HomePageLoading;
