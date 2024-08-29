import * as React from "react";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "@/components/FilterSidebar";
import MainGrid from "@/components/MainGrid";
import PaginationWrapperCategoryPage from "@/components/PaginationWrapperCategoryPage";
import { CLOTHINGS } from "@/data";
import {
  ContentWrapper,
  HeaderWrapper,
  SortWrapper,
  Text,
  Title,
  Wrapper,
} from "./style";

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
  "new-arrivals": "New Arrivals",
};

function CategoryPage({ params }: PageProps) {
  const label = PARAMSLABEL[params.category];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: label, href: "/" + params.category },
  ];

  const datas = [...CLOTHINGS];

  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <ContentWrapper>
        <FilterSidebar />
        <div style={{ flex: 4 }}>
          <HeaderWrapper>
            <Title>{PARAMSLABEL[params.category]}</Title>
            <SortWrapper>
              <Text>Showing 1-10 of 100 Products</Text>
              Sort by:
            </SortWrapper>
          </HeaderWrapper>
          <MainGrid datas={datas} />
          <PaginationWrapperCategoryPage datas={datas} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CategoryPage;
