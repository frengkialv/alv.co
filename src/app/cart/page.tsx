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
import LoadingComponent from "@/components/LaodingComponent/LaodingComponent";
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

  const { fetchDataCart, carts, setCarts } = React.useContext(CartContext);
  console.log("🚀 ~ CartPage ~ carts:", carts);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // const [carts, setCarts] = React.useState<CartType[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);
  const [deliveryFee, setDeliveryFee] = React.useState<number>(15);

  React.useEffect(() => {
    const nextTotalPrice = formatTotalPriceCart(carts);

    setTotalPrice(nextTotalPrice);
  }, [carts]);

  const deleteProductHandler = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await deleteCart(id);

      if (data) {
        setTimeout(() => {
          fetchDataCart();
          showToast({
            title: "Success!",
            description: "Successfully delete cart.",
          });
        }, 2000);
      }
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const quantityChangeHandler = async (id: string, quantity: number) => {
    try {
      setIsLoading(true);
      const { data } = await updateQuantityCart(id, quantity);

      if (data) {
        setTimeout(() => {
          fetchDataCart();
        }, 500);
      }
    } catch (error) {
      window.location.href = "/cart";
      console.log("🚀 ~ error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

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
      <LoadingComponent isOpen={isLoading} />
    </Wrapper>
  );
}

export default CartPage;
