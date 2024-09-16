"use client";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import RatingAndDiscountTabWrapper from "@/components/RatingAndDiscountTabWrapper";
import SuggestionProduct from "@/components/SuggestionProduct";
import { CardWrapper, Wrapper } from "./style";
import { PARAMSLABEL } from "@/types/common";
import { ProductsType } from "@/types/product";
import { getProductByName } from "@/services/product.services";
import Error from "next/error";
import ScrollToTop from "@/components/ScrollToTop";

interface PageProps {
  params: {
    name: string;
    category: string;
  };
}

function DetailPage({ params }: PageProps) {
  const paramCategory = PARAMSLABEL[params.category];
  let paramName = "";

  if (params.name) {
    paramName = params.name.replaceAll("%2B", " ");
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: paramCategory, href: "/" + params.category },
    { label: paramName, href: "/" + params.name },
  ];

  const [product, setProduct] = React.useState<ProductsType>();
  const [isError, setIsError] = React.useState<boolean>(false);
  const [errorCode, setErrorCode] = React.useState<number>(404);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    findProductHandler();
  }, []);

  const findProductHandler = async () => {
    const nextParams = params.name.replaceAll("%2B", "%20");
    try {
      const { data } = await getProductByName(nextParams);

      if (!data) {
        setErrorCode(204);
        setErrorMessage("No data found");
        setIsError(true);
        return;
      }

      setProduct(data);
    } catch (error) {
      console.log("🚀 ~ findProductHandler ~ error:", error);
      setErrorMessage("This page could not be found.");
      setErrorCode(404);
      setIsError(true);
    }
  };

  if (isError) {
    return <Error statusCode={errorCode} title={errorMessage} />;
  }

  return (
    <Wrapper>
      <ScrollToTop />
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <CardWrapper>
        <ProductImage images={product?.productImage!} />
        {product && <ProductContent product={product} />}
      </CardWrapper>

      {/* <RatingAndDiscountTabWrapper /> */}

      {/* <SuggestionProduct /> */}
    </Wrapper>
  );
}

export default DetailPage;
