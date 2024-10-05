import * as React from "react";
import { notFound } from "next/navigation";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebarDekstop from "@/components/FilterSidebarDekstop";
import MainGrid from "@/components/MainGrid";
import PaginationWrapperCategoryPage from "@/components/PaginationWrapperCategoryPage";
import SortWrapperCategoryPage from "@/components/SortWrapperCategoryPage";
import FilterSidebarTablet from "@/components/FilterSidebarTablet";
import FilterSidebarMobile from "@/components/FilterSidebarMobile";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorComponent from "@/components/ErrorComponent";
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
import EmptyProduct from "@/components/EmptyProduct";
import LoadingCategoryPage from "@/components/LoadingCategoryPage";
import CategoryProvider from "@/components/Provider/CategoryProvider";
import { capitalizeFirstLetter } from "@/utils";

interface PageProps {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string };
}

export async function generateMetadata({ params }: PageProps) {
  const categoryName = capitalizeFirstLetter(params.category);

  return {
    title: `Buy ${categoryName} Online | Alv.co`,
  };
}

async function CategoryPage({ params, searchParams }: PageProps) {
  if (!(params.category in PARAMSLABEL)) {
    return notFound();
  }

  const label = PARAMSLABEL[params.category];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: label, href: "/" + params.category },
  ];

  let data;

  data = await getProducts(searchParams, params.category);

  if (data === "Internal server error") {
    return <ErrorComponent statusCode={500} />;
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
              <Title>{PARAMSLABEL[params.category]}</Title>
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
