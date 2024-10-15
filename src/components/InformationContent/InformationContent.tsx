import React from "react";
import {
  AmountWrapperDekstop,
  AmountWrapperMobile,
  DescAmount,
  InternationalBrandAmountDekstop,
  InternationalBrandAmountMobile,
  LargeText,
  NumberAmount,
  ShopButton,
  SmallText,
  Wrapper,
} from "./style";
import { useRouter } from "next/navigation";

function InformationContent() {
  return (
    <Wrapper>
      <LargeText>FIND CLOTHES THAT MATCHES YOUR STYLE</LargeText>
      <SmallText>
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </SmallText>
      <ShopButton>Shop Now</ShopButton>

      <AmountWrapperDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>200+</NumberAmount>
          <DescAmount>International Brands</DescAmount>
        </InternationalBrandAmountDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>2,000+</NumberAmount>
          <DescAmount>High-Quality Products</DescAmount>
        </InternationalBrandAmountDekstop>
        <InternationalBrandAmountDekstop>
          <NumberAmount>30,000+</NumberAmount>
          <DescAmount>Happy Customers</DescAmount>
        </InternationalBrandAmountDekstop>
      </AmountWrapperDekstop>

      <AmountWrapperMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>200+</NumberAmount>
          <DescAmount>International Brands</DescAmount>
        </InternationalBrandAmountMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>2,000+</NumberAmount>
          <DescAmount>High-Quality Products</DescAmount>
        </InternationalBrandAmountMobile>
      </AmountWrapperMobile>

      <AmountWrapperMobile>
        <InternationalBrandAmountMobile>
          <NumberAmount>30,000+</NumberAmount>
          <DescAmount>Happy Customers</DescAmount>
        </InternationalBrandAmountMobile>
      </AmountWrapperMobile>
    </Wrapper>
  );
}

export default InformationContent;
