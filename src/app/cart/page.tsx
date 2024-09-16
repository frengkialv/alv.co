"use client";
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
import { getCart } from "@/services/cart.service";
import { CartType } from "@/types/cart";
import { formatPrice, formatTotalPriceCart } from "@/utils";

function CartPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];
  const [carts, setCarts] = React.useState<CartType[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [deliveryFee, setDeliveryFee] = React.useState<number>(15);

  React.useEffect(() => {
    findCartHandler();
  }, []);

  React.useEffect(() => {
    const nextTotalPrice = formatTotalPriceCart(carts);

    setTotalPrice(nextTotalPrice);
  }, [carts]);

  const findCartHandler = async () => {
    try {
      const { data } = await getCart();

      setCarts(data);
    } catch (error) {
      console.log("🚀 ~ findCartHandler ~ error:", error);
    }
  };

  const changeQuantityHandler = ({
    id,
    value,
  }: {
    id: string;
    value: number;
  }) => {
    const nextCarts = carts.map((cart) => {
      if (cart.id === id) {
        cart.quantity = value;
        return cart;
      }

      return cart;
    });

    setCarts(nextCarts);
  };

  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <MainTitle>Your Cart</MainTitle>
      <ContentWrapper>
        <CartGrid carts={carts} quantityOnChange={changeQuantityHandler} />

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
              <Value>{formatPrice(deliveryFee)}</Value>
            </RowSummary>
            <TotalSummary>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>{formatPrice(totalPrice + deliveryFee)}</TotalValue>
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
