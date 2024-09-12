"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import BadgeNotification from "../BadgeNotification";
import EmptyCartImage from "../../../public/empty-cart.png";
import { WEIGHT } from "@/constants";
import { CLOTHING_ORDERS } from "@/data";
import { ClothingOrdersProps } from "@/type";
import Button from "../Button";

export function CartIconTrigger() {
  return (
    <BadgeNotification badgeNumber={CLOTHING_ORDERS.length}>
      <UnstyledButton>
        <Icon id="shopping-cart" strokeWidth={2.5} size={22} />
      </UnstyledButton>
    </BadgeNotification>
  );
}

function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <Image
        src={EmptyCartImage}
        alt="Empty Cart"
        quality={100}
        width={300}
        height={300}
      />
      <TextWrapper>
        <BoldText>Your Bag Is Empty</BoldText>
        <NormalText>Start filling it up with your favourites</NormalText>
      </TextWrapper>
    </EmptyCartWrapper>
  );
}

function ListCart({ datas }: { datas: ClothingOrdersProps[] }) {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  React.useEffect(() => {
    let nextTotalPrice = 0;

    datas.forEach((data) => {
      if (data.discountByPercent !== null) {
        nextTotalPrice +=
          (data.price - (data.price * data.discountByPercent) / 100) *
          data.quantity;
      } else {
        nextTotalPrice += data.price * data.quantity;
      }
    });

    setTotalPrice(nextTotalPrice);
  }, [datas]);

  return (
    <ListCartWrapper>
      <ListWrapper>
        {datas.map((data) => (
          <List key={data.slug}>
            <ImageWrapper>
              <ImageList src={data.imgSrc} alt="" quality={100} fill priority />
            </ImageWrapper>
            <DetailWrapper>
              <ProductName>{data.name}</ProductName>
              <ColorAndSizeWrapper>
                <Text style={{ flex: 1 }}>Color: {data.colors}</Text>
                &nbsp; &nbsp;
                <Text style={{ flex: 1 }}>Size: {data.size}</Text>
              </ColorAndSizeWrapper>
              <Text>Quantity: {data.quantity}</Text>
              <PriceWrapper>
                {/* Real Price or Price After Discount */}
                <Price>
                  {data.discountByPercent !== null
                    ? (data.price -
                        (data.price * data.discountByPercent) / 100) *
                      data.quantity
                    : data.price * data.quantity}
                </Price>

                {/* Real Price */}
                {data.discountByPercent !== null && (
                  <Price $disabled={true}>{data.price * data.quantity}</Price>
                )}
              </PriceWrapper>
            </DetailWrapper>
          </List>
        ))}
      </ListWrapper>

      <TotalPriceWrapper>
        Sub Total
        <Price>{totalPrice}</Price>
      </TotalPriceWrapper>

      <Button size="small" grow={true} onClick={() => router.push("/cart")}>
        Go To Bag
      </Button>
    </ListCartWrapper>
  );
}

function CartContent() {
  const datas = CLOTHING_ORDERS as ClothingOrdersProps[];

  return (
    <Wrapper>
      {datas.length === 0 && <EmptyCart />}
      {datas.length > 0 && <ListCart datas={datas} />}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const EmptyCartWrapper = styled.div`
  padding: 0 20px 20px 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoldText = styled.h6``;

const NormalText = styled.span`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHT.medium};
  color: var(--color-gray-600);
`;

const ListCartWrapper = styled.div`
  padding: 15px;
  width: 350px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 6px;
  padding-bottom: 20px;
  margin-right: -10px;
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const List = styled.div`
  display: flex;
  gap: 14px;
`;

const ImageWrapper = styled.div`
  flex: 2;
  position: relative;
  overflow: hidden;
  min-width: 94px;
`;

const DetailWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h6`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
`;

const ColorAndSizeWrapper = styled.div`
  display: flex;
  margin-top: 2px;
`;

const Text = styled.span`
  font-size: ${13 / 16}rem;
  color: var(--color-gray-600);
  font-weight: ${WEIGHT.medium};
`;

const Price = styled.h6<{ $disabled?: boolean }>`
  color: ${(props) => (props.$disabled ? "#999999" : "var(--color-black)")};
  text-decoration: ${(props) => (props.$disabled ? "line-through" : "none")};
  margin-top: 6px;

  &::before {
    content: "$";
  }
`;

const ImageList = styled(Image)`
  object-fit: cover;
  object-position: center top;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${WEIGHT.medium};
  margin-bottom: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--color-gray-200);
`;

export default CartContent;
