"use client";
import * as React from "react";
import { CLOTHINGS } from "@/data";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebarDekstop from "@/components/FilterSidebarDekstop";
import MainGrid from "@/components/MainGrid";
import PaginationWrapperCategoryPage from "@/components/PaginationWrapperCategoryPage";
import SortWrapperCategoryPage from "@/components/SortWrapperCategoryPage";
import FilterSidebarTablet from "@/components/FilterSidebarTablet";
import {
  ButtonWrapper,
  ContentWrapper,
  HeaderWrapper,
  Title,
  Wrapper,
  WrapperFilterSidebarMobile,
  WrapperFilterSidebarTablet,
} from "./style";
import FilterSidebarMobile from "@/components/FilterSidebarMobile";
import { getProduct } from "@/services/product.services";
import { ProductsType } from "@/type";
import { SortOptions } from "@/constants";

interface PageProps {
  params: {
    category: string;
  };
}

interface PARAMSLABELPROPS {
  [key: string]: string;
}

const PARAMSLABEL: PARAMSLABELPROPS = {
  "t-shirts": "T-Shirts",
  shoes: "Shoes",
  accessories: "Accessories",
  sport: "Sport",
  "on-sale": "On Sale",
  "new-arrivals": "New Arrivals",
};

function CategoryPage({ params }: PageProps) {
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
