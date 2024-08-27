"use client";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";

export const TabAndDiscountContent = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  margin-top: 50px;
  border-top: 1px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column-reverse;
    gap: 60px;
  }
`;

export const DiscountWrapper = styled.div`
  flex: 1;
  min-width: 250px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const DiscountTitle = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHT.bold};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 19px;
`;

export const DiscountCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    /* align-items: center; */
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-white);
  background: linear-gradient(
    109.6deg,
    rgba(0, 0, 0, 0.93) 11.2%,
    rgb(63, 61, 61) 78.9%
  );
  font-size: ${12 / 16}rem;
  border-radius: 10px;
  position: relative;
  padding: 14px 30px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 300px;
  }
`;

export const CircleLeft = styled.div`
  position: absolute;
  background-color: var(--color-white);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: -15px;
`;

export const CircleRight = styled.div`
  position: absolute;
  background-color: var(--color-white);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  right: -15px;
`;
