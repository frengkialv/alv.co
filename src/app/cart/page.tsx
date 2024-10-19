import * as React from "react";
import { cookies } from "next/headers";
import {
  ApplyButtonWrapper,
  BoldText,
  ContentWrapper,
  DiscountValue,
  EmptyCartImageDekstop,
  EmptyCartImageMobile,
  EmptyDataWrapper,
  InnerWrapper,
  InputPromoWrapper,
  InputWrapper,
  Label,
  MainTitle,
  NormalText,
  PromoIcon,
  PromoWrapper,
  RowSummary,
  SummaryTitle,
  SummaryWrapper,
  TextWrapper,
  TotalLabel,
  TotalSummary,
  TotalValue,
  Value,
  Wrapper,
} from "./styles";
import { formatPrice, formatTotalPriceCart } from "@/utils";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartGrid from "@/components/CartGrid";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import EmptyCartIcon from "@/components/SVG/EmptyCartIcon";

export async function generateMetadata() {
  return {
    title: "Cart",
  };
}

async function getCarts() {
  const cookiesStore = cookies();
  const access_token = cookiesStore.get("access_token")?.value;

  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/cart`;

    const res = await fetch(url, {
      cache: "no-store",
      headers: { authorization: access_token! },
    });

    if (!res.ok) {
      throw new Error("Oops! Something wicked happened.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("🚀 ~ getCarts ~ error:", error);
    throw new Error("Oops! Something wicked happened.");
  }
}

async function CartPage() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  const { data: carts } = await getCarts();

  if (carts && carts.length === 0) {
    return (
      <EmptyDataWrapper>
        <EmptyCartImageDekstop>
          <EmptyCartIcon width="420" height="300" />
        </EmptyCartImageDekstop>

        <EmptyCartImageMobile>
          <EmptyCartIcon width="320" height="200" />
        </EmptyCartImageMobile>

        <TextWrapper>
          <BoldText>Your Shopping Cart Is Empty</BoldText>
          <NormalText style={{ marginBottom: "10px" }}>
            Start filling it up with your favourites
          </NormalText>
          <Button
            style={{ marginTop: "8px" }}
            // onClick={() => router.push("on-sale")}
          >
            {"Let's go Shopping!"}
          </Button>
        </TextWrapper>
      </EmptyDataWrapper>
    );
  }
  const deliveryFee = 15;
  const totalPrice = formatTotalPriceCart(carts);

  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <MainTitle>Your Cart</MainTitle>
      <ContentWrapper>
        <CartGrid carts={carts} />

        <SummaryWrapper>
          <InnerWrapper>
            <SummaryTitle>Order Summary</SummaryTitle>
            <RowSummary>
              <Label>Subtotal</Label>
              <Value>{formatPrice(totalPrice)}</Value>
            </RowSummary>
            <RowSummary>
              <Label>Discount (0%)</Label>
              <DiscountValue>0</DiscountValue>
            </RowSummary>
            <RowSummary>
              <Label>Delivery Fee</Label>
              <Value>{formatPrice(totalPrice !== 0 ? deliveryFee : 0)}</Value>
            </RowSummary>
            <TotalSummary>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>
                {formatPrice(totalPrice !== 0 ? totalPrice + deliveryFee : 0)}
              </TotalValue>
            </TotalSummary>
            <PromoWrapper>
              <InputPromoWrapper>
                <InputWrapper placeholder="Add promo code" />
                <PromoIcon />
              </InputPromoWrapper>

              <ApplyButtonWrapper>
                <Button grow={true} size="small" disabled={totalPrice === 0}>
                  Apply
                </Button>
              </ApplyButtonWrapper>
            </PromoWrapper>
            <Button grow={true} size="small" disabled={totalPrice === 0}>
              Go to Checkout
              <Icon id="arrow-right" color="white" strokeWidth={2} />
            </Button>
          </InnerWrapper>
        </SummaryWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CartPage;
