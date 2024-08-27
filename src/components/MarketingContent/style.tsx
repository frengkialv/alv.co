"use client";
import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import { ChildrenProps } from "@/type";

export const ImageWrapper = () => {
  return (
    <ImageWrapperStyle
      src="/clothes-display.png"
      alt="Picture of the model"
      quality={100}
      fill
      sizes="(max-width: 500px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  );
};

export const Wrapper = styled.div`
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

export const ModelContent = styled.div`
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

const ImageWrapperStyle = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;
