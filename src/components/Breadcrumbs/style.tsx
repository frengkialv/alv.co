"use client";
import styled from "styled-components";
import { QUERIES } from "@/constants";

export const BreadcrumbList = styled.ul`
  display: flex;
  gap: 6px;
  align-items: baseline;
  padding: 16px 0;
  margin: 0;
  list-style-type: none;
`;

export const CrumbWrapper = styled.li`
  display: inline;
`;

export const CrumbLinkWrapper = styled.div`
  display: flex;
`;

export const CrumbLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-gray-500);
  text-decoration: none;
  font-weight: 500;
  text-transform: capitalize;
  font-size: ${14 / 16}rem;
  user-select: none;

  &[aria-current] {
    color: var(--color-black);
  }

  &:hover {
    text-decoration: revert;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${13 / 16}rem;
  }
`;

export const CrumbText = styled.span`
  color: var(--color-black);
  font-size: ${14 / 16}rem;
  font-weight: 500;
  line-height: 1;
  text-transform: capitalize;
  user-select: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${13 / 16}rem;
  }
`;
