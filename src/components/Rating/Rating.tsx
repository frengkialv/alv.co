"use client";
import React from "react";
import styled from "styled-components";
import StarFullFill from "../SVG/StarFullFill";
import StarBorder from "../SVG/StarBorder";
import { ratingCalculation } from "@/utils";

interface RatingProps {
  rating: number;
  size?: RatingSize;
}

export enum RatingSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const StarFill = ({ rating, width }: { rating: number; width: string }) => {
  return (
    <FillRatingWrapping $width={rating}>
      <StarFullFill width={width} />
    </FillRatingWrapping>
  );
};

function Rating({ rating, size = RatingSize.MEDIUM }: RatingProps) {
  if (rating > 5) {
    throw new Error("Invalid Rating");
  }

  const fractionalRatings = ratingCalculation(rating);
  const widthWrapper = {
    small: "15px",
    medium: "20px",
    large: "25px",
  };

  return (
    <Wrapper>
      {fractionalRatings.map((fractionalRating, index) => {
        return (
          <InnerWrapper key={index}>
            <StarBorder width={widthWrapper[size]} />
            <StarFill width={widthWrapper[size]} rating={fractionalRating} />
          </InnerWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const InnerWrapper = styled.div`
  display: inline;
  position: relative;
`;

const FillRatingWrapping = styled.div<{ $width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$width + "%"};
  overflow: hidden;
`;

export default Rating;
