"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { QUERIES, WEIGHT } from "@/constants";

function ButtonToNewArrival() {
  const router = useRouter();

  return <Button onClick={() => router.push("/new-arrivals")}>View All</Button>;
}

const Button = styled.button`
  font-weight: ${WEIGHT.medium};
  padding: 15px 80px;
  background-color: transparent;
  border: 1px solid #dad8d8;
  border-radius: 60px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    width: 100%;
    padding-top: 13.5px;
    padding-bottom: 13.5px;
  }
`;
export default ButtonToNewArrival;
