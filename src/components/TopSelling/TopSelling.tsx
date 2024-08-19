import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Rating from "../Rating";
import Spacer from "@/components/Spacer";
import useWindowSize from "@/hooks/useWindowSize";
import { QUERIES, WEIGHT } from "@/constants";
import { CLOTHINGS } from "@/data";
import { ClothingsType, Size } from "@/type";
import { formatDiscountPrice, isNewClothing } from "@/utils";

function TopSelling() {
  const [datas, setDatas] = React.useState<ClothingsType[]>([]);

  const { width, height } = useWindowSize();

  const filterTopSellingData = () => {
    const datas = CLOTHINGS.sort((a, b) => b.sold - a.sold).slice(0, 4);

    setDatas(datas);
  };

  React.useEffect(() => {
    filterTopSellingData();
  }, []);

  return (
    <Wrapper>
      {width !== undefined && width > 675 && <Spacer size={72} />}
      {width !== undefined && width <= 675 && <Spacer size={41} />}
      <Header>TOP SELLING</Header>

      <ProductGrid>
        {datas.map((data) => {
          return (
            <ProductList href={data.slug} key={data.slug}>
              <ImageWrapper>
                <ImageProduct
                  src={data.imgSrc}
                  alt=""
                  width={300}
                  height={300}
                  quality={100}
                  priority
                />
              </ImageWrapper>
              <Row>
                <Name>{data.name}</Name>
                <RatingWrapper>
                  <Rating
                    rating={data.rating}
                    size={
                      width !== undefined && width > 675
                        ? Size.MEDIUM
                        : Size.SMALL
                    }
                  />
                  <RatingNumber>{data.rating}/5</RatingNumber>
                </RatingWrapper>
                <PriceWrapper>
                  {data.discountByPercent && (
                    <PriceDiscount>
                      {formatDiscountPrice(data.price, data.discountByPercent)}
                    </PriceDiscount>
                  )}

                  <Price
                    $color={data.discountByPercent ? "#999999" : undefined}
                    $lineDecoration={
                      data.discountByPercent ? "line-through" : undefined
                    }
                  >
                    {data.price}
                  </Price>

                  {data.discountByPercent && (
                    <DiscountFlag>{data.discountByPercent}%</DiscountFlag>
                  )}
                </PriceWrapper>
              </Row>
            </ProductList>
          );
        })}
      </ProductGrid>

      <ButtonWrapper>
        <Button>View All</Button>
      </ButtonWrapper>
      {width !== undefined && width > 675 && <Spacer size={64} />}
      {width !== undefined && width <= 675 && <Spacer size={39} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-right: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-left: clamp(1rem, 14vw - 5rem, 6.25rem);
`;

const Header = styled.h1`
  font-family: var(--integral-cf);
  font-size: ${48 / 16}rem;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  justify-items: center;
  gap: 30px 20px;
  padding-top: 40px;
  padding-bottom: 46px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(4, 200px);
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 24px;
    overflow: auto;

    // For hide the scrollbar but still scrollable
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari & Chrome */
    }
  }
`;

const ProductList = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-black);
`;

const ImageWrapper = styled.div`
  margin-bottom: 16px;
`;

const ImageProduct = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-size: ${20 / 16}rem;
  font-weight: 700;
  width: 285px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${QUERIES.phoneAndSmaller} {
    width: 200px;
    font-size: ${16 / 16}rem;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

const RatingNumber = styled.span`
  font-size: ${14 / 16}rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PriceDiscount = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Price = styled.span<{
  $color: string | undefined;
  $lineDecoration: string | undefined;
}>`
  --color: ${(props) => props.$color};
  --line-decoration: ${(props) => props.$lineDecoration};

  font-size: ${20 / 16}rem;
  font-weight: 700;
  color: var(--color);
  text-decoration: var(--line-decoration);

  &::before {
    content: "$";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const DiscountFlag = styled.span`
  font-size: ${12 / 16}rem;
  font-weight: 500;
  color: var(--color-red);
  background-color: var(--color-soft-pink);
  padding: 6px 16px;
  text-align: center;
  border-radius: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: ${WEIGHT.medium};
  padding: 15px 80px;
  background-color: transparent;
  border: 1px solid #dad8d8;
  border-radius: 60px;
  cursor: pointer;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    width: 100%;
    padding-top: 13.5px;
    padding-bottom: 13.5px;
  }
`;

export default TopSelling;
