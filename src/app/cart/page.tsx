"use client";
import * as React from "react";
import Image from "next/image";
import {
  ApplyButtonWrapper,
  BoldText,
  ContentWrapper,
  DiscountValue,
  EmptyDataWrapper,
  EmptyImage,
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
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import CartGrid from "@/components/CartGrid";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import LoadingComponent from "@/components/LaodingComponent/LaodingComponent";
import EmptyCartImage from "../../../public/empty-cart.png";
import { deleteCart, updateQuantityCart } from "@/services/cart.service";
import { formatPrice, formatTotalPriceCart } from "@/utils";
import { useToast } from "@/components/Provider/ToastProvider";
import { CartContext } from "@/components/Provider/CartProvider";

function CartPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];
  const { showToast } = useToast();

  const { fetchDataCart, carts } = React.useContext(CartContext);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [deliveryFee, setDeliveryFee] = React.useState<number>(15);

  React.useEffect(() => {
    if (carts) {
      const nextTotalPrice = formatTotalPriceCart(carts);

      setTotalPrice(nextTotalPrice);
    }
  }, [carts]);

  const deleteProductHandler = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await deleteCart(id);

      if (data) {
        setTimeout(() => {
          showToast({
            title: "Success!",
            description: "Item has been removed from the cart.",
          });
        }, 2000);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      setTimeout(async () => {
        await fetchDataCart();
        setIsLoading(false);
      }, 2000);
    }
  };

  const quantityChangeHandler = async (id: string, quantity: number) => {
    try {
      setIsLoading(true);
      const { data } = await updateQuantityCart(id, quantity);

      if (data) {
        setTimeout(() => {}, 500);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      setTimeout(async () => {
        await fetchDataCart();
        setIsLoading(false);
      }, 500);
    }
  };

  if (carts && carts.length === 0) {
    return (
      <EmptyDataWrapper>
        <EmptyImage
          src={EmptyCartImage}
          alt="Empty Cart"
          quality={100}
          width={300}
          height={300}
        />

        <TextWrapper>
          <BoldText>Your Shopping Cart Is Empty</BoldText>
          <NormalText style={{ marginBottom: "10px" }}>
            Start filling it up with your favourites
          </NormalText>
          <Button>Let's go Shopping!</Button>
        </TextWrapper>
      </EmptyDataWrapper>
    );
  }

  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />

      <MainTitle>Your Cart</MainTitle>
      <ContentWrapper>
        <CartGrid
          carts={carts}
          quantityOnChange={quantityChangeHandler}
          deleteProduct={deleteProductHandler}
        />

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
      <LoadingComponent isLoading={isLoading} />
    </Wrapper>
  );
}

export default CartPage;
