"use client";
import React from "react";
import styled from "styled-components";
import { AvatarPofile } from "../ProfileDropdownContent";
import Avatar, { SizeProps } from "../Avatar";
import DialogMenu from "../DialogMenu";
import SettingLogo from "../SVG/SettingLogo";
import WalletIcon from "../SVG/WalletIcon";
import QuestionLogo from "../SVG/QuestionLogo";
import UpgradeLogo from "../UpgradeLogo";
import SignOutLogo from "../SVG/SignOutLogo";
import { WEIGHT } from "@/constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

function Content({ src }: { src: string }) {
  return (
    <ContentWrapper>
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
        <UnstyledButton style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </UnstyledButton>
      </Row>
      <Row href="/wallet">
        <WalletIcon />
        My Wallet
        <UnstyledButton style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </UnstyledButton>
      </Row>
      <Row href="/help-center">
        <QuestionLogo />
        Help Center
        <UnstyledButton style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </UnstyledButton>
      </Row>
      <Row href="/upgrade-plan">
        <UpgradeLogo />
        Upgrade Plan
        <UnstyledButton style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </UnstyledButton>
      </Row>
      <Row>
        <SignOutLogo />
        Sign Out
        <UnstyledButton style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} color="red" />
        </UnstyledButton>
      </Row>
    </ContentWrapper>
  );
}

function ProfileDetailTablet({ src }: { src: string }) {
  const [showDialogMenu, setshowDialogMenu] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <UnstyledButton onClick={() => setshowDialogMenu(true)}>
        <AvatarPofile src={src} />
      </UnstyledButton>

      <DialogMenu open={showDialogMenu} onOpenChange={setshowDialogMenu}>
        <Content src={src} />
      </DialogMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 15px;
  /* border-bottom: 0.7px solid var(--color-gray-200); */
`;

const DetailUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.medium};
  white-space: nowrap;
`;

const Email = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
  white-space: nowrap;
`;

const Row = styled.a`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 4px;
  color: var(--color-black);
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.medium};
  border-top: 0.7px solid var(--color-gray-200);

  &:last-child {
    color: red;
  }
`;

export default ProfileDetailTablet;
