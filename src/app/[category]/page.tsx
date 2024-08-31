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

  const datas = [...CLOTHINGS];

  return (
    <Wrapper>
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
          <MainGrid datas={datas} />
          <PaginationWrapperCategoryPage datas={datas} />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CategoryPage;
