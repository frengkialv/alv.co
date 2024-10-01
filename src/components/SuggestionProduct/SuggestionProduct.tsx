import React from "react";
import ProductGrid from "../ProductGrid";
import { Dash, HeaderTitle, SpacerNewArrival } from "./style";
import { getProductsForDisplay } from "@/services/product.services";

async function SuggestionProduct() {
  const datas = await getProductsForDisplay("new-arrival", 4);

  return (
    <>
      <SpacerNewArrival />

      <HeaderTitle>You May Also Like</HeaderTitle>

      <ProductGrid datas={datas} />

      <Dash />
    </>
  );
}

export default SuggestionProduct;
