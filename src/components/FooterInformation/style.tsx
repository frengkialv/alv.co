"use client";
import styled from "styled-components";
import { QUERIES, WEIGHT } from "@/constants";
import { ChildrenProps } from "@/type";
import Tooltip from "../Tooltip";

interface Props extends ChildrenProps {
  textTooltip: string;
}

export const RoundedButton = ({
  children,
  textTooltip,
  ...delegated
}: Props) => {
  return (
    <Tooltip text={textTooltip}>
      <RoundedButtonStyle {...delegated}>{children}</RoundedButtonStyle>
    </Tooltip>
  );
};

export const MobileInformation = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

export const DekstopInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px repeat(auto-fill, minmax(135px, 1fr));
  justify-content: space-between;
  gap: 45px clamp(2rem, 16vw - 6.5rem, 7rem);
  padding-bottom: 50px;
  border-bottom: 2px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 30px 80px;
  }
`;

export const Filler = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

export const LogoWrapper = styled.div`
  --font-size: ${32 / 16}rem;
  width: fit-content;
  margin-bottom: -18px;

  @media ${QUERIES.phoneAndSmaller} {
    --font-size: ${28 / 16}rem;
  }
`;

export const DescriptionWebsite = styled.p`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
`;

export const ButtonSocialMediaWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const RoundedButtonStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  text-align: center;
  border: none;
  outline-offset: 3px;
  cursor: pointer;
  user-select: none;
`;

export const RowHeader = styled.span`
  font-weight: ${WEIGHT.bold};
  letter-spacing: 3px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  flex-direction: column;
  gap: 8px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    gap: 8px;
  }
`;

export const Text = styled.span`
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
