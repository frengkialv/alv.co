import React from "react";
import ProductGrid from "../ProductGrid";
import { Dash, HeaderTitle, SpacerNewArrival } from "./style";
import { getProductsForDisplay } from "@/services/product.services";
import { ProductsType } from "@/types/product";

function SuggestionProduct() {
  const [products, setProducts] = React.useState<ProductsType[]>([]);

  React.useEffect(() => {
    fetchDataNewArrival();
  }, []);

  const fetchDataNewArrival = async () => {
    try {
      const { data } = await getProductsForDisplay("new-arrival", 4);

      setProducts(data);
    } catch (error) {
      console.log("🚀 ~ fetchDataNewArrival ~ error:", error);
    }
  };

  return (
    <>
      <SpacerNewArrival />

      <HeaderTitle>You May Also Like</HeaderTitle>

      <ProductGrid datas={products} />

      <Dash />
    </>
  );
}

export default SuggestionProduct;
