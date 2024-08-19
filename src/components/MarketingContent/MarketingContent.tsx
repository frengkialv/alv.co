import { QUERIES } from "@/constants";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import InformationContent from "../InformationContent";

function MarketingContent() {
  return (
    <Wrapper>
      <InformationContent />
      <ModelContent>
        <ImageWrapper
          src="/clothes-display.png"
          alt="Picture of the model"
          quality={100}
          fill
          priority
        />
      </ModelContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-left: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-right: 50px;
  background-color: var(--color-pearls);

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    padding-right: clamp(1rem, 14vw - 5rem, 6.25rem);
  }
`;

const ModelContent = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: var(--color-pearls);

  @media ${QUERIES.tabletAndSmaller} {
    min-height: 800px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const ImageWrapper = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center top;
`;

const WrapperTriangle = styled.div`
  display: none;
  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
    position: absolute;
  }
`;

export default MarketingContent;
