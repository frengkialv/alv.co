"use client";
import React from "react";
import styled from "styled-components";
import Avatar, { SizeProps } from "../Avatar";
import { QUERIES, WEIGHT } from "@/constants";
import SettingLogo from "../SVG/SettingLogo";
import QuestionLogo from "../SVG/QuestionLogo";
import UpgradeLogo from "../UpgradeLogo";
import SignOutLogo from "../SVG/SignOutLogo";
import WalletIcon from "../SVG/WalletIcon";

export function AvatarPofile({ src }: { src: string }) {
  return (
    <AvaatarWrapper>
      <Avatar src={src} />
    </AvaatarWrapper>
  );
}

function ProfileDropdownContent({ src }: { src: string }) {
  return (
    <Wrapper>
      <Header>
        <Avatar src={src} size={SizeProps.LARGE} />
        <DetailUser>
          <Name>Ragnar Oeramsey</Name>
          <Email>ragnar.oeramsey@gmail.com</Email>
        </DetailUser>
      </Header>
      <Row href="/setting">
        <SettingLogo />
        Profile Settings
      </Row>
      <Row href="/wallet">
        <WalletIcon />
        My Wallet
      </Row>
      <Row href="/help-center">
        <QuestionLogo />
        Help Center
      </Row>
      <Row href="/upgrade-plan">
        <UpgradeLogo />
        Upgrade Plan
      </Row>
      <Row>
        <SignOutLogo />
        Sign Out
      </Row>
    </Wrapper>
  );
}

const AvaatarWrapper = styled.div`
  margin-bottom: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 0.7px solid var(--color-gray-200);
`;

const DetailUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: ${WEIGHT.medium};
  white-space: nowrap;
`;

const Email = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
  white-space: nowrap;
`;

const Row = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px 4px;
  color: var(--color-black);
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};

  &:last-child {
    color: red;
    border-top: 0.7px solid var(--color-gray-200);
  }
`;

export default ProfileDropdownContent;
