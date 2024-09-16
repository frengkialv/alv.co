"use client";
import * as React from "react";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebarDekstop from "@/components/FilterSidebarDekstop";
import MainGrid from "@/components/MainGrid";
import PaginationWrapperCategoryPage from "@/components/PaginationWrapperCategoryPage";
import SortWrapperCategoryPage from "@/components/SortWrapperCategoryPage";
import FilterSidebarTablet from "@/components/FilterSidebarTablet";
import FilterSidebarMobile from "@/components/FilterSidebarMobile";
import ScrollToTop from "@/components/ScrollToTop";
import Error from "next/error";
import {
  ButtonWrapper,
  ContentWrapper,
  HeaderWrapper,
  Title,
  Wrapper,
  WrapperFilterSidebarMobile,
  WrapperFilterSidebarTablet,
} from "./style";
import { getProduct } from "@/services/product.services";
import { SortOptions } from "@/constants";
import { PARAMSLABEL } from "@/types/common";
import { ProductsType } from "@/types/product";

interface PageProps {
  params: {
    category: string;
  };
}

function CategoryPage({ params }: PageProps) {
  if (!(params.category in PARAMSLABEL)) {
    return <Error statusCode={404} />;
  }
  const label = PARAMSLABEL[params.category];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: label, href: "/" + params.category },
  ];

  const [products, setProducts] = React.useState<ProductsType[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [priceFilter, setPriceFilter] = React.useState<number[]>([20, 200]);
  const [colorsFilter, setcolorsFilter] = React.useState<string[]>([]);
  const [sizesFilter, setSizesFilter] = React.useState<string[]>([]);
  const [sort, setSort] = React.useState<string>(SortOptions[0].value);

  React.useEffect(() => {
    getData();
  }, [page, sort]);

  const getData = async () => {
    const price = `${priceFilter[0]}-${priceFilter[1]}`;
    const { data, totalPages } = await getProduct({
      page: page,
      price,
      color: colorsFilter,
      productSize: sizesFilter,
      sort,
      category: params.category,
    });

    setProducts(data);
    setTotalPages(totalPages);
  };

  const submitFilter = async () => {
    await getData();
  };

  return (
    <Wrapper>
      <ScrollToTop />
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <ContentWrapper>
        <FilterSidebarDekstop
          valuePrice={priceFilter}
          onPriceChange={setPriceFilter}
          valueColor={colorsFilter}
          onColorChange={setcolorsFilter}
          valueSize={sizesFilter}
          onSizeChange={setSizesFilter}
          submitFilter={submitFilter}
        />
        <div style={{ flex: 4 }}>
          <HeaderWrapper>
            <Title>{PARAMSLABEL[params.category]}</Title>
            <ButtonWrapper>
              <WrapperFilterSidebarTablet>
                <FilterSidebarTablet
                  valuePrice={priceFilter}
                  onPriceChange={setPriceFilter}
                  valueColor={colorsFilter}
                  onColorChange={setcolorsFilter}
                  valueSize={sizesFilter}
                  onSizeChange={setSizesFilter}
                  submitFilter={submitFilter}
                />
              </WrapperFilterSidebarTablet>

              <WrapperFilterSidebarMobile>
                <FilterSidebarMobile
                  valuePrice={priceFilter}
                  onPriceChange={setPriceFilter}
                  valueColor={colorsFilter}
                  onColorChange={setcolorsFilter}
                  valueSize={sizesFilter}
                  onSizeChange={setSizesFilter}
                  submitFilter={submitFilter}
                />
              </WrapperFilterSidebarMobile>

              <SortWrapperCategoryPage value={sort} onValueChange={setSort} />
            </ButtonWrapper>
          </HeaderWrapper>

          <MainGrid datas={products} />

          <PaginationWrapperCategoryPage
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CategoryPage;
