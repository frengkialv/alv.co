"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import SettingLogo from "../SVG/SettingLogo";
import QuestionLogo from "../SVG/QuestionLogo";
import UpgradeLogo from "../SVG/UpgradeLogo";
import SignOutLogo from "../SVG/SignOutLogo";
import WalletIcon from "../SVG/WalletIcon";
import Icon from "../Icon";
import Avatar, { SizeProps } from "../Avatar";
import { deleteCookie } from "cookies-next";
import { WEIGHT } from "@/constants";
import { FindUserDtoOut } from "@/services/user.service";

export function AvatarPofile() {
  return (
    <AvaatarWrapper>
      <Icon id="user" strokeWidth={2.2} />
    </AvaatarWrapper>
  );
}

export function ProfileDropdownContentEmpty() {
  return (
    <Wrapper>
      <InnerWrapper>
        <WrapperLogin>
          <IconWrapper>
            <Icon id="login" size={20} strokeWidth={2} />
          </IconWrapper>
          <EmptyDropdownLink href="/login">Login</EmptyDropdownLink>
          <span style={{ fontSize: "18px", lineHeight: 1.2 }}>/</span>
          <EmptyDropdownLink href="/register">Register</EmptyDropdownLink>
        </WrapperLogin>
        <WrapperLogin>
          <IconWrapper>
            <QuestionLogo />
          </IconWrapper>
          <EmptyDropdownLink href="/">Help Center</EmptyDropdownLink>
        </WrapperLogin>
      </InnerWrapper>
    </Wrapper>
  );
}

function ProfileDropdownContent({
  user,
}: {
  user: FindUserDtoOut | undefined;
}) {
  const [initialName, setinitialName] = React.useState<string>("");

  React.useEffect(() => {
    if (user) {
      getInitials(user.name);
    }
  }, []);

  const handleSignOut = () => {
    deleteCookie("access_token");

    // for hard reload
    window.location.href = "/login";
  };

  const getInitials = (name: string) => {
    const firstLetter = name.charAt(0).toUpperCase();

    // Find first letter
    const spaceIndex = name.indexOf(" ");

    // Find second letter
    const secondLetter =
      spaceIndex !== -1 ? name.charAt(spaceIndex + 1).toUpperCase() : "";

    // Join first latter and second letter
    const result = firstLetter + secondLetter;

    setinitialName(result);
  };

  return (
    <Wrapper>
      <Header>
        <Avatar src={""} size={SizeProps.LARGE} name={initialName} />
        <DetailUser>
          <Name>{user?.name}</Name>
          <Email>{user?.email}</Email>
        </DetailUser>
      </Header>
      <Row href="/">
        <SettingLogo />
        Profile Settings
      </Row>
      <Row href="/">
        <WalletIcon />
        My Wallet
      </Row>
      <Row href="/">
        <QuestionLogo />
        Help Center
      </Row>
      <Row href="/">
        <UpgradeLogo />
        Upgrade Plan
      </Row>
      <Row onClick={handleSignOut}>
        <SignOutLogo />
        Sign Out
      </Row>
    </Wrapper>
  );
}

const AvaatarWrapper = styled.div`
  margin-bottom: 3px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const WrapperLogin = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  width: 250px;
  font-weight: ${WEIGHT.medium};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const EmptyDropdownLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  min-width: 35px;
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
  text-transform: capitalize;
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
