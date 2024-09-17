"use client";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
import UnstyledButton from "../UnstyledButton";
import HoverCard from "../HoverCard";
import ProfileDetailTablet from "../ProfileDetailTablet";
import BadgeNotification from "../BadgeNotification";
import CartContent, { CartIconTrigger } from "../CartContent";
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { HeaderContext } from "../Provider/HeaderProvider";
import { QUERIES } from "@/constants";
import { findUser, FindUserDtoOut } from "@/services/user.service";
import { CartType } from "@/types/cart";
import { getCart } from "@/services/cart.service";
import ProfileDropdownContent, {
  AvatarPofile,
  ProfileDropdownContentEmpty,
} from "../ProfileDropdownContent";
import { CartContext } from "../Provider/CartProvider";

function ActionHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const accessToken = getCookie("access_token");
  const { carts } = React.useContext(CartContext);
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

      {pathname !== "/cart" && (
        <WrapperCartDropdownDekstop>
          <HoverCard
            trigger={<CartIconTrigger badgeNumber={carts.length} />}
            sideOffsite={10}
          >
            <CartContent carts={carts} />
          </HoverCard>
        </WrapperCartDropdownDekstop>
      )}

      {pathname !== "/cart" && (
        <WrapperCartDropdownTablet>
          <BadgeNotification badgeNumber={carts.length}>
            <UnstyledButton onClick={() => router.push("/cart")}>
              <Icon id="shopping-cart" strokeWidth={2.5} size={22} />
            </UnstyledButton>
          </BadgeNotification>
        </WrapperCartDropdownTablet>
      )}

      <WrapperProfileDropdownDekstop>
        <HoverCard trigger={<AvatarPofile />} sideOffsite={7}>
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
