"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import styled from "styled-components";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import { QUERIES, WEIGHT } from "@/constants";
import Icon from "@/components/Icon";

function Detail() {
  const [tabSelected, setTabSelected] = React.useState<string>("detail");

  return (
    <Wrapper>
      <Breadcrumbs />

      <CardWrapper>
        <ProductImage />

        <ProductContent />
      </CardWrapper>

      <TabWrapper>
        <TabHeaderWrapper>
          <TabHeader
            $active={tabSelected === "detail"}
            onClick={() => setTabSelected("detail")}
          >
            Product Details
          </TabHeader>
          <TabHeader
            $active={tabSelected === "rating"}
            onClick={() => setTabSelected("rating")}
          >
            Rating & Reviews
          </TabHeader>
          <TabHeader
            $active={tabSelected === "faq"}
            onClick={() => setTabSelected("faq")}
          >
            FAQs
          </TabHeader>
        </TabHeaderWrapper>

        <TabContent>
          <RatingTab>
            <Header>
              <HeaderTitle>All Reviews</HeaderTitle>

              <SortButton>
                Latest
                <Icon id="chevron-down" strokeWidth={2} color="white" />
              </SortButton>
            </Header>
          </RatingTab>
        </TabContent>
      </TabWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --padding-horizontal: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-right: var(--padding-horizontal);
  padding-left: var(--padding-horizontal);
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TabWrapper = styled.div`
  padding-top: 60px;
`;

const TabHeaderWrapper = styled.div`
  display: flex;
`;

const TabHeader = styled.div<{ $active?: boolean }>`
  flex: 1;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHT.medium};
  text-align: center;
  padding-bottom: 14px;
  position: relative;
  border-bottom: 1px solid var(--color-gray-200);
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    &::after {
      content: "";
      height: 2px;
      width: ${(props) => (props.$active ? "100%" : "0px")};
      background-color: var(--color-black);
      border-radius: 10px;
      position: absolute;
      bottom: -1px;
      left: ${(props) => (props.$active ? 0 : "unset")};
      right: ${(props) => (props.$active ? "unset" : 0)};
      transition: 0.4s;
    }
  }
`;

const TabContent = styled.div`
  padding: 24px 0;
`;

const RatingTab = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHT.bold};
`;

const SortButton = styled.button`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-weight: ${WEIGHT.medium};
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px 20px;
  border: none;
  border-radius: 60px;
`;

export default Detail;
