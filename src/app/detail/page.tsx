import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import { CardWrapper, Wrapper } from "./style";
import RatingAndDiscountTabWrapper from "@/components/RatingAndDiscountTabWrapper";
import SuggestionProduct from "@/components/SuggestionProduct";

function Detail() {
  return (
    <Wrapper>
      <Breadcrumbs />

      <CardWrapper>
        <ProductImage />
        <ProductContent />
      </CardWrapper>

      <RatingAndDiscountTabWrapper />

      <SuggestionProduct />
    </Wrapper>
  );
}

export default Detail;
