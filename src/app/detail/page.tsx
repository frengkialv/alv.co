"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductImage from "@/components/ProductImage";
import ProductContent from "@/components/ProductContent";
import SortDialogMenu from "@/components/SortDialogMenu";
import SortIcon from "@/components/SVG/SortIcon";
import { QUERIES, WEIGHT } from "@/constants";
import { OptionsType, Size } from "@/type";
import Rating from "@/components/Rating";
import VerifiedLogo from "@/components/SVG/VerifiedLogo";

function Detail() {
  const [tabSelected, setTabSelected] = React.useState<string>("detail");
  const [showShowDialogMenu, setShowSortDialogMenu] =
    React.useState<boolean>(false);
  const [sort, setSort] = React.useState<string>("popularity");
  const [sortOptions, setSortOptions] = React.useState<OptionsType[]>([
    {
      value: "popularity",
      label: "Popularity",
    },
    {
      value: "newest-arrival",
      label: "Newest Arrival",
    },
    {
      value: "latest-arrival",
      label: "Latest Arrival",
    },
    {
      value: "price-high-to-low",
      label: "Price High To Low",
    },
    {
      value: "price-low-to-high",
      label: "Price Low To High",
    },
  ]);

  const handleSortChange = (val: string) => {
    console.log("🚀 ~ handleSortChange ~ val:", val);

    setSort(val);
    setShowSortDialogMenu(false);
  };
  return (
    <Wrapper>
      <Breadcrumbs />

      <CardWrapper>
        <ProductImage />
        <ProductContent />
      </CardWrapper>

      <TabAndDiscountContent>
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
          </TabHeaderWrapper>

          <TabContent>
            {tabSelected === "rating" && (
              <RatingTab>
                <Header>
                  <HeaderTitle>All Reviews</HeaderTitle>

                  <SortButton onClick={() => setShowSortDialogMenu(true)}>
                    Sort
                    <SortIcon />
                  </SortButton>
                </Header>

                <RatingContent>
                  {[1, 2, 3, 4, 5, 6].map((val) => (
                    <Card key={val}>
                      <CardHeaderWrapping>
                        <Rating rating={4.4} size={Size.MEDIUM} />
                        <PostedDate>August 14, 2023</PostedDate>
                      </CardHeaderWrapping>

                      <NameWrapper>
                        <Name>Samantha D.</Name>
                        <VerifiedLogo />
                      </NameWrapper>

                      <Testimonial>
                        "This t-shirt is a must-have for anyone who appreciates
                        good design. The minimalistic yet stylish pattern caught
                        my eye, and the fit is perfect. I can see the designer's
                        touch in every aspect of this shirt."
                      </Testimonial>
                    </Card>
                  ))}
                </RatingContent>
              </RatingTab>
            )}

            {/* {
              tabSelected && (

              )
            } */}
          </TabContent>
        </TabWrapper>

        <DiscountWrapper></DiscountWrapper>
      </TabAndDiscountContent>

      {showShowDialogMenu && (
        <SortDialogMenu
          open={showShowDialogMenu}
          sort={sort}
          sortOptions={sortOptions}
          handleSortChange={handleSortChange}
          handleShowSortDialogMenu={setShowSortDialogMenu}
        />
      )}
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

const TabAndDiscountContent = styled.div`
  display: flex;
  gap: 20px;
`;

const TabWrapper = styled.div`
  flex: 5;
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
  will-change: transform;

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
  margin-bottom: 32px;
`;

const HeaderTitle = styled.h4`
  font-size: ${24 / 16}rem;
  font-weight: ${WEIGHT.bold};
`;

const SortButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-weight: ${WEIGHT.medium};
  color: var(--color-white);
  background-color: var(--color-black);
  padding: 10px 20px;
  border: none;
  border-radius: 60px;
  outline-offset: 4px;
  cursor: pointer;
`;

const RatingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 32px;
  border: 1px solid var(--color-gray-200);
  border-radius: 20px;
`;

const CardHeaderWrapping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Name = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: ${WEIGHT.bold};
`;

const Testimonial = styled.p`
  color: var(--color-gray-600);
`;

const PostedDate = styled.p`
  font-size: ${13 / 16}rem;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
`;

const DiscountWrapper = styled.div`
  flex: 1;
`;
export default Detail;
