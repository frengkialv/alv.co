"use client";
import { QUERIES, WEIGHT } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: var(--padding-horizontal-wrapper);
  padding-right: var(--padding-horizontal-wrapper);
  padding-bottom: 60px;
  border-top: 1px solid var(--color-gray-200);
`;

export const BannerWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: 20px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    /* display: none; */
  }
`;

export const ImageBanner = styled(Image)`
  width: 70%;
  height: auto;

  @media ${QUERIES.tabletAndSmaller} {
    width: 90%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  padding: 40px 0;
  padding-bottom: 40px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 25px 0;
  }
`;

export const Header = styled.h2`
  font-family: var(--font-nothing-you-could-do);
  font-size: ${60 / 16}rem;
  text-align: center;
  line-height: 1;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${50 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${40 / 16}rem;
  }
`;

export const ListWrapper = styled.ul`
  column-count: 5;
  column-gap: 10px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px 10px;
    column-count: 4;
  }

  @media ${QUERIES.phoneAndSmaller} {
    column-count: 2;
  }
`;

export const List = styled.li`
  padding: 4px 0;
`;

export const LinkList = styled(Link)`
  font-size: ${15 / 16}rem;
  text-decoration: none;
  color: black;
  font-weight: ${WEIGHT.medium};
  text-transform: capitalize;
  white-space: nowrap;

  &:hover {
    border-bottom: 1.6px solid var(--color-black);
  }

  @media ${QUERIES.tabletAndSmaller} {
    &:hover {
      border-bottom: none;
    }
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const FeaturedBrandWrapper = styled.div`
  padding-top: 88px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 56px;
  }
`;

export const TitleFeaturedBrand = styled.h2`
  font-size: ${32 / 16}rem;
  text-align: center;
  line-height: 1;
  padding-bottom: 52px;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${28 / 16}rem;
    padding-bottom: 38px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${24 / 16}rem;

    padding-bottom: 38px;
  }
`;

export const FeaturedImageWrapper = styled.div`
  display: grid;
  padding: 0 154px;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 15px;
  justify-items: center;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0 90px;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 6%;
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
`;

export const HighlightedImage = styled(Link)`
  position: relative;
  display: inline-block;
  overflow: hidden;

  img {
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: brightness(1.2); /* Increase brightness */
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2); /* White overlay */
    pointer-events: none; /* Ensure overlay doesn't block interaction */
  }
`;

export const FeaturedImage = styled(Image)`
  width: 100%;
  height: auto;
`;
