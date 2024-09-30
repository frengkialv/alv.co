"use client";
import React from "react";
import styled from "styled-components";
import VerifiedLogo from "../SVG/VerifiedLogo";
import Rating, { RatingSize } from "../Rating/Rating";
import { WEIGHT } from "@/constants";

function RatingCard() {
  return (
    <Card>
      <CardHeaderWrapping>
        <Rating rating={4.4} size={RatingSize.MEDIUM} />
        <PostedDate>August 14, 2023</PostedDate>
      </CardHeaderWrapping>

      <NameWrapper>
        <Name>Samantha D.</Name>
        <VerifiedLogo />
      </NameWrapper>

      <Testimonial>
        {
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
        }
      </Testimonial>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 32px;
  border: 1px solid var(--color-gray-200);
  border-radius: 20px;
`;

const CardHeaderWrapping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Name = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHT.bold};
`;

const Testimonial = styled.p`
  color: var(--color-gray-600);
`;

const PostedDate = styled.p`
  font-size: ${13 / 16}rem;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
`;

export default RatingCard;
