"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Avatar, { SizeProps } from "../Avatar";
import DialogMenu from "../DialogMenu";
import Icon from "../Icon";
import SettingLogo from "../SVG/SettingLogo";
import WalletIcon from "../SVG/WalletIcon";
import QuestionLogo from "../SVG/QuestionLogo";
import UpgradeLogo from "../SVG/UpgradeLogo";
import SignOutLogo from "../SVG/SignOutLogo";
import UnstyledButton from "../UnstyledButton";
import { AvatarPofile } from "../ProfileDropdownContent";
import { WEIGHT } from "@/constants";
import { deleteCookie } from "cookies-next";
import { FindUserDtoOut } from "@/services/user.service";

function Content({
  user,
  dialogHandle,
}: {
  user: FindUserDtoOut;
  dialogHandle: (val: boolean) => void;
}) {
  const router = useRouter();
  const [initialName, setinitialName] = React.useState<string>("");

  React.useEffect(() => {
    getInitials(user.name);
  }, [user]);

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

  const handleSignOut = () => {
    deleteCookie("access_token");
    dialogHandle(false);

    // for hard reload
    window.location.href = "/login";
  };
  return (
    <ContentWrapper>
      <Header>
        <Avatar src={""} size={SizeProps.LARGE} name={initialName} />
        <DetailUser>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </DetailUser>
      </Header>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/");
        }}
      >
        <SettingLogo />
        Profile Settings
        <div style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </div>
      </Row>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/");
        }}
      >
        <WalletIcon />
        My Wallet
        <div style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </div>
      </Row>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/");
        }}
      >
        <QuestionLogo />
        Help Center
        <div style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </div>
      </Row>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/");
        }}
      >
        <UpgradeLogo />
        Upgrade Plan
        <div style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </div>
      </Row>
      <LogoutButton onClick={() => handleSignOut()}>
        <SignOutLogo />
        Sign Out
        <div style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} color="red" />
        </div>
      </LogoutButton>
    </ContentWrapper>
  );
}

function EmptyContent({
  dialogHandle,
}: {
  dialogHandle: (val: boolean) => void;
}) {
  const router = useRouter();

  return (
    <ContentWrapper>
      <Row
        style={{
          paddingTop: 0,
        }}
        onClick={() => {
          dialogHandle(false);
          router.push("/login");
        }}
      >
        <Icon id="login" size={18} strokeWidth={2} />
        Login
        <IconWrapper style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </IconWrapper>
      </Row>

      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/login");
        }}
      >
        <SettingLogo />
        Profile Settings
        <IconWrapper style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </IconWrapper>
      </Row>

      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/login");
        }}
      >
        <WalletIcon />
        My Wallet
        <IconWrapper style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </IconWrapper>
      </Row>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/login");
        }}
      >
        <QuestionLogo />
        Help Center
        <IconWrapper style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </IconWrapper>
      </Row>
      <Row
        onClick={() => {
          dialogHandle(false);
          router.push("/login");
        }}
      >
        <UpgradeLogo />
        Upgrade Plan
        <IconWrapper style={{ marginLeft: "auto" }}>
          <Icon id="chevron-right" strokeWidth={1.5} />
        </IconWrapper>
      </Row>
    </ContentWrapper>
  );
}

function ProfileDetailTablet({ user }: { user: FindUserDtoOut | undefined }) {
  const [showDialogMenu, setshowDialogMenu] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <UnstyledButton onClick={() => setshowDialogMenu(true)}>
        <AvatarPofile />
      </UnstyledButton>

      <DialogMenu open={showDialogMenu} onOpenChange={setshowDialogMenu}>
        {user ? (
          <Content user={user} dialogHandle={setshowDialogMenu} />
        ) : (
          <EmptyContent dialogHandle={setshowDialogMenu} />
        )}
      </DialogMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  text-transform: capitalize;
`;

const Email = styled.span`
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
  white-space: nowrap;
`;

const Row = styled(UnstyledButton)`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 4px;
  color: var(--color-black);
  font-size: ${16 / 16}rem;
  font-weight: ${WEIGHT.medium};
`;

const LogoutButton = styled(UnstyledButton)`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 4px;
  color: red;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.medium};
  border-top: 0.7px solid var(--color-gray-200);
`;

const EmptyDropdownLink = styled.div`
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

export default ProfileDetailTablet;
