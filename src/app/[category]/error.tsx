"use client"; // Error components must be Client Components
import * as React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import ErrorIcon from "@/components/SVG/ErrorICon";
import { QUERIES, WEIGHT } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <WrapperSvgDekstop>
        <ErrorIcon width="500px" height="500px" />
      </WrapperSvgDekstop>
      <WrapperSvgTablet>
        <ErrorIcon width="350px" height="350px" />
      </WrapperSvgTablet>
      <WrapperSvgMobile>
        <ErrorIcon width="250px" height="250px" />
      </WrapperSvgMobile>
      <Title>
        {error.message ||
          "Oops! The page you're looking for couldn't be found."}
      </Title>
      <Button variant="primary" onClick={() => router.push("/")}>
        Back to Homepage
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 90px 0;
  }
`;

const WrapperSvgDekstop = styled.div`
  display: block;
  margin-top: -20px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const WrapperSvgTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;
const WrapperSvgMobile = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const Title = styled.span`
  font-weight: 600;
  margin-top: -30px;
  padding-bottom: 18px;
  user-select: none;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: -20px;
    font-size: ${14 / 16}rem;
  }
`;

const SVGPrimitive = styled.svg`
  width: 100%;
  height: 100%;
`;
