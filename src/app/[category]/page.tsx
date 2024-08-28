import * as React from "react";
import BreadCrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FilterSidebar from "@/components/FilterSidebar";
import { ContentWrapper, Wrapper } from "./style";

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
  "new-arrivals": "New Arrivals",
};

function CategoryPage({ params }: PageProps) {
  const label = PARAMSLABEL[params.category];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: label, href: "/" + params.category },
  ];

  return (
    <Wrapper>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <ContentWrapper>
        <FilterSidebar />
        <div className="" style={{ flex: 4 }}></div>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CategoryPage;
