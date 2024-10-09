import * as React from "react";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebarDekstop from "@/components/FilterSidebarDekstop";
import MainGrid from "@/components/MainGrid";
import PaginationWrapperCategoryPage from "@/components/PaginationWrapperCategoryPage";
import SortWrapperCategoryPage from "@/components/SortWrapperCategoryPage";
import FilterSidebarTablet from "@/components/FilterSidebarTablet";
import FilterSidebarMobile from "@/components/FilterSidebarMobile";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ButtonWrapper,
  ContentWrapper,
  HeaderWrapper,
  Title,
  Wrapper,
  WrapperFilterSidebarMobile,
  WrapperFilterSidebarTablet,
} from "./style";
import { getProducts } from "@/services/product.services";
import { PARAMSLABEL } from "@/types/common";
import { ProductsType } from "@/types/product";
import { capitalizeFirstLetter } from "@/utils";
import EmptyProduct from "@/components/EmptyProduct";
import LoadingCategoryPage from "@/components/LoadingCategoryPage";
import CategoryProvider from "@/components/Provider/CategoryProvider";

interface PageProps {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string };
}

export async function generateMetadata({ params, searchParams }: PageProps) {
  const categoryName =
    params.category === "brand" ? searchParams.brand : params.category;

  return {
    title: `Buy ${capitalizeFirstLetter(categoryName)} Online | Alv.co`,
  };
}

const findBrands = async (brandName: string) => {
  try {
    const SEARCH_BRAND_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/brand/name/${brandName}`;

    const res = await fetch(SEARCH_BRAND_URL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    const { data: brand } = await res.json();

    if (brand === null) {
      throw new Error("Page Not Found");
    }

    return brand;
  } catch (error) {
    throw new Error("Page Not Found");
  }
};

async function CategoryPage({ params, searchParams }: PageProps) {
  if (!(params.category in PARAMSLABEL)) {
    throw new Error("Page Not Found");
  }

  let brandId = "";
  let breadcrumbs = [];

  // Validation brand
  if (params.category === "brand") {
    const brand = await findBrands(searchParams.brand);

    brandId = brand.id;

    breadcrumbs = [
      { label: "Home", href: "/" },
      { label: "Brand", href: "/brands" },
      { label: searchParams.brand, href: "/" + searchParams.brand },
    ];
  } else {
    const label = PARAMSLABEL[params.category];

    breadcrumbs = [
      { label: "Home", href: "/" },
      { label: label, href: "/" + params.category },
    ];
  }

  const title =
    params.category === "brand"
      ? searchParams.brand
      : PARAMSLABEL[params.category];

  let data;

  if (params.category === "brand") {
    data = await getProducts(
      { ...searchParams, brand: brandId },
      params.category
    );
  } else {
    data = await getProducts(searchParams, params.category);
  }

  if (data === "Internal server error") {
    throw new Error("Oops! The page you're looking for couldn't be found.");
  }

  const {
    data: products,
    totalPages,
    currentPage,
  }: {
    data: ProductsType[];
    totalPages: number;
    currentPage: number;
  } = data;

  if (products && products.length === 0) {
    return <EmptyProduct />;
  }

  return (
    <CategoryProvider>
      <Wrapper>
        <ScrollToTop />
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        <ContentWrapper>
          <FilterSidebarDekstop />

          <div style={{ flex: 4 }}>
            <HeaderWrapper>
              <Title>{title}</Title>
              <ButtonWrapper>
                <WrapperFilterSidebarTablet>
                  <FilterSidebarTablet />
                </WrapperFilterSidebarTablet>

                <WrapperFilterSidebarMobile>
                  <FilterSidebarMobile />
                </WrapperFilterSidebarMobile>

                <SortWrapperCategoryPage />
              </ButtonWrapper>
            </HeaderWrapper>

            <MainGrid datas={products} />

            <PaginationWrapperCategoryPage
              page={currentPage}
              totalPages={totalPages}
            />
          </div>
        </ContentWrapper>

        <LoadingCategoryPage />
      </Wrapper>
    </CategoryProvider>
  );
}

export default CategoryPage;
