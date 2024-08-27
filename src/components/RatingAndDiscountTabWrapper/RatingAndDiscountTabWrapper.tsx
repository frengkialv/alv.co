import React from "react";
import RatingTab from "../RatingTab";
import {
  Card,
  CircleLeft,
  CircleRight,
  DiscountCard,
  DiscountTitle,
  DiscountWrapper,
  TabAndDiscountContent,
} from "./style";

function RatingAndDiscountTabWrapper() {
  return (
    <TabAndDiscountContent>
      <RatingTab />

      <DiscountWrapper>
        <DiscountTitle>Discount Voucher</DiscountTitle>
        <DiscountCard>
          <Card>
            <span style={{ display: "block", fontSize: "0.9rem" }}>8% Off</span>
            <span style={{ display: "block" }}>Min Spend $50.</span>
            <span>74% used, Valid Till: 31.08.2024</span>
            <CircleLeft />
            <CircleRight />
          </Card>
          <Card>
            <span style={{ display: "block", fontSize: "0.9rem" }}>
              10% Off + 5% Cashback
            </span>
            <span style={{ display: "block" }}>Min Spend $150.</span>
            <span>50% used, Valid Till: 20.09.2024</span>
            <CircleLeft />
            <CircleRight />
          </Card>
          <Card>
            <span style={{ display: "block", fontSize: "0.9rem" }}>
              30% Off
            </span>
            <span style={{ display: "block" }}>Min Spend $300.</span>
            <span>65% used, Valid Till: 19.11.2024</span>
            <CircleLeft />
            <CircleRight />
          </Card>
        </DiscountCard>
      </DiscountWrapper>
    </TabAndDiscountContent>
  );
}

export default RatingAndDiscountTabWrapper;
