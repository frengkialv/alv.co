"use client";
import React from "react";
import styled from "styled-components";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { HeaderContext } from "../Provider/HeaderProvider";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import UnstyledButton from "../UnstyledButton";
import HoverCard from "../HoverCard";
import { QUERIES } from "@/constants";
import ProfileDropdownContent, {
  AvatarPofile,
  ProfileDropdownContentEmpty,
} from "../ProfileDropdownContent";
import { CLOTHING_ORDERS } from "@/data";
import CartContent, { CartIconTrigger } from "../CartContent";
import ProfileDetailTablet from "../ProfileDetailTablet";
import BadgeNotification from "../BadgeNotification";
import { findUser } from "@/services/user.service";
import { FindUserDtoOut } from "@/type";

function ActionHeader() {
  const router = useRouter();
  const accessToken = getCookie("access_token");
  const { setShowSearchModal } = React.useContext(HeaderContext);
  const [user, setUser] = React.useState<FindUserDtoOut>();

  React.useEffect(() => {
    if (accessToken) {
      findUserHandler();
    }
  }, []);

  const findUserHandler = async () => {
    try {
      const { data } = await findUser();

      setUser(data);
    } catch (error) {
      console.log("🚀 ~ findUserHandler ~ error:", error);
    }
  };

  return (
    <ActionWrapper>
      <Tooltip text="Search">
        <SearchButton onClick={() => setShowSearchModal(true)}>
          <Icon id="search" strokeWidth={2.5} size={24} />
        </SearchButton>
      </Tooltip>

      <WrapperCartDropdownDekstop>
        <HoverCard trigger={<CartIconTrigger />} sideOffsite={10}>
          <CartContent />
        </HoverCard>
      </WrapperCartDropdownDekstop>

      <WrapperCartDropdownTablet>
        <BadgeNotification badgeNumber={CLOTHING_ORDERS.length}>
          <UnstyledButton onClick={() => router.push("/cart")}>
            <Icon id="shopping-cart" strokeWidth={2.5} size={22} />
          </UnstyledButton>
        </BadgeNotification>
      </WrapperCartDropdownTablet>

      <WrapperProfileDropdownDekstop>
        <HoverCard trigger={<AvatarPofile />}>
          {accessToken ? (
            <ProfileDropdownContent user={user} />
          ) : (
            <ProfileDropdownContentEmpty />
          )}
        </HoverCard>
      </WrapperProfileDropdownDekstop>

      <WrapperProfileDropdownTablet>
        <ProfileDetailTablet user={user} />
      </WrapperProfileDropdownTablet>
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 18px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: auto;
    gap: 16px;
  }
`;

const SearchButton = styled(UnstyledButton)`
  display: none;
  user-select: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    margin-right: -5px;
  }
`;

const WrapperCartDropdownDekstop = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const WrapperCartDropdownTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const WrapperProfileDropdownDekstop = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const WrapperProfileDropdownTablet = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

export default ActionHeader;
