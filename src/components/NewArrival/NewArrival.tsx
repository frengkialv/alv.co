"use client";
import React from "react";
import ProductGrid from "../ProductGrid";
import {
  Button,
  ButtonWrapper,
  Dash,
  HeaderTitle,
  SpacerNewArrival,
  Wrapper,
} from "./style";
import { getProductsForDisplay } from "@/services/product.services";
import { ProductsType } from "@/types/product";
import { useRouter } from "next/navigation";

function NewArrival() {
  const router = useRouter();
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
    <Wrapper>
      <SpacerNewArrival />

      <HeaderTitle>NEW ARRIVALS</HeaderTitle>

      <ProductGrid datas={products} />

      <ButtonWrapper>
        <Button onClick={() => router.push("/new-arrivals")}>View All</Button>
      </ButtonWrapper>

      <SpacerNewArrival />

      <Dash />
    </Wrapper>
  );
}

export default NewArrival;
