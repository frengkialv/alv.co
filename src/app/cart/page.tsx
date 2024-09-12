import * as React from "react";
import {
  ApplyButtonWrapper,
  ContentWrapper,
  DiscountValue,
  InnerWrapper,
  InputPromoWrapper,
  InputWrapper,
  Label,
  MainTitle,
  PromoIcon,
  PromoWrapper,
  RowSummary,
  SummaryTitle,
  SummaryWrapper,
  TotalLabel,
  TotalSummary,
  TotalValue,
  Value,
  Wrapper,
} from "./styles";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartGrid from "@/components/CartGrid";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

function CartPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];
  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <MainTitle>Your Cart</MainTitle>
      <ContentWrapper>
        <CartGrid />

        <SummaryWrapper>
          <InnerWrapper>
            <SummaryTitle>Order Summary</SummaryTitle>
            <RowSummary>
              <Label>Subtotal</Label>
              <Value>565</Value>
            </RowSummary>
            <RowSummary>
              <Label>Discount (-20%)</Label>
              <DiscountValue>113</DiscountValue>
            </RowSummary>
            <RowSummary>
              <Label>Delivery Fee</Label>
              <Value>15</Value>
            </RowSummary>
            <TotalSummary>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>467</TotalValue>
            </TotalSummary>
            <PromoWrapper>
              <InputPromoWrapper>
                <InputWrapper placeholder="Add promo code" />
                <PromoIcon />
              </InputPromoWrapper>

              <ApplyButtonWrapper>
                <Button grow={true} size="small">
                  Apply
                </Button>
              </ApplyButtonWrapper>
            </PromoWrapper>
            <Button grow={true} size="small">
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
