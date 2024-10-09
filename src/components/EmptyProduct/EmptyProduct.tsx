"use client";
import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import EmptyDataIcon from "../SVG/EmptyDataIcon";
import { useRouter } from "next/navigation";
import { QUERIES, WEIGHT } from "@/constants";

function EmptyProduct() {
  const router = useRouter();

  return (
    <EmptyDataWrapper>
      <EmptyDataImageDekstopWrapper>
        <EmptyDataIcon width="550px" />
      </EmptyDataImageDekstopWrapper>

      <EmptyDataImageTabletWrapper>
        <EmptyDataIcon width="450px" />
      </EmptyDataImageTabletWrapper>

      <EmptyDataImagePhoneWrapper>
        <EmptyDataIcon width="350px" />
      </EmptyDataImagePhoneWrapper>

      <TextWrapper>
        <BoldText>No result found</BoldText>
        <NormalText>{"We couldn't find what you searched for."}</NormalText>
        <NormalText style={{ marginBottom: "12px" }}>
          Try searching again
        </NormalText>
        <Button size="small" onClick={() => router.back()}>
          Explore another product
        </Button>
      </TextWrapper>
    </EmptyDataWrapper>
  );
}

const EmptyDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

const EmptyDataImageDekstopWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const EmptyDataImageTabletWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const EmptyDataImagePhoneWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 2px;

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 20px;
  }
`;

const BoldText = styled.h6`
  font-size: ${16 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const NormalText = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${13 / 16}rem;
  }
`;

export default EmptyProduct;
