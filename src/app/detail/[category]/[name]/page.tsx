import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import RatingAndDiscountTabWrapper from "@/components/RatingAndDiscountTabWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorComponent from "@/components/ErrorComponent";
import DetailProvider from "@/components/Provider/DetailProvider";
import { CardWrapper, Wrapper } from "./style";
import { PARAMSLABEL } from "@/types/common";
import { getProductByName } from "@/services/product.services";
import { notFound } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils";

interface PageProps {
  params: {
    name: string;
    category: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const nextParams = params.name.replaceAll("%2B", "%20");

  const { data } = await getProductByName(nextParams);

  const brandName = data ? capitalizeFirstLetter(data.brand.name) : "";
  const productName = data ? capitalizeFirstLetter(data.name) : "";

  return {
    title: `${brandName} ${productName}`,
  };
}

async function DetailPage({ params }: PageProps) {
  // For handle params and breadcrumbs
  const paramCategory = PARAMSLABEL[params.category];

  if (!paramCategory) {
    return notFound();
  }

  let paramName = "";

  if (params.name) {
    paramName = params.name.replaceAll("%2B", " ");
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: paramCategory, href: "/" + params.category },
    { label: paramName, href: "/" + params.name },
  ];

  const findProductHandler = async () => {
    const nextParams = params.name.replaceAll("%2B", "%20");

    try {
      const { data } = await getProductByName(nextParams);

      if (data === null) {
        return null;
      }

      return data;
    } catch (error) {
      return null;
    }
  };

  const data = await findProductHandler();

  if (!data) {
    return (
      <ErrorComponent
        statusCode={404}
        title={"This product could not be found."}
      />
    );
  }

  return (
    <DetailProvider>
      <Wrapper>
        <ScrollToTop />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <CardWrapper>
          <ProductImage images={data.productImage} category={params.category} />

          <ProductContent product={data} category={params.category} />
        </CardWrapper>

        {/* <RatingAndDiscountTabWrapper /> */}

        {/* <div style={{ marginTop: "10px" }} />
      <SuggestionProduct /> */}
      </Wrapper>
    </DetailProvider>
  );
}

export default DetailPage;
