"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { QUERIES, WEIGHT } from "@/constants";
import Button from "@/components/Button";
import EmptyDataImage from "../../../public/no-data.png";

function EmptyProduct() {
  const router = useRouter();

  return (
    <EmptyDataWrapper>
      <EmptyDataInnerWrapper>
        <EmptyImage
          src={EmptyDataImage}
          alt="Empty Cart"
          width={200}
          height={200}
          quality={100}
          unoptimized
        />
      </EmptyDataInnerWrapper>

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

const EmptyDataInnerWrapper = styled.div`
  width: 200px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 130px;
  }
`;

const EmptyImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
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
