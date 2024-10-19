"use client";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import {
  ContentWrapper,
  InnerWrapper,
  SummaryWrapper,
  Wrapper,
} from "./styles";
import { QUERIES } from "@/constants";
import {
  BottomContent,
  DetailWrapper,
  EntityWrapper,
  ProductNameWrapper,
  Row,
} from "@/components/CartList/styles";

function CartPageLoading() {
  const arr = new Array(3).fill(0);

  return (
    <Wrapper>
      <Skeleton
        variant="text"
        height={40}
        width={300}
        animation="wave"
        sx={{ bgcolor: "#F3F0F1" }}
      />

      <ContentWrapper>
        <GridWrapper>
          {arr.map((val, index) => (
            <Row key={index}>
              {/* For Image */}
              <ImageWrapper>
                <Skeleton
                  variant="rounded"
                  width={125}
                  height={178}
                  animation="wave"
                  sx={{ bgcolor: "#F3F0F1" }}
                />
              </ImageWrapper>

              <DetailWrapper>
                <ProductNameWrapper>
                  <div style={{ flex: 1 }}>
                    <Skeleton
                      variant="rounded"
                      height={20}
                      animation="wave"
                      sx={{ bgcolor: "#F3F0F1" }}
                    />
                  </div>
                </ProductNameWrapper>

                <EntityWrapper style={{ gap: "10px" }}>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    animation="wave"
                    sx={{ bgcolor: "#F3F0F1" }}
                  />{" "}
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    animation="wave"
                    sx={{ bgcolor: "#F3F0F1" }}
                  />
                </EntityWrapper>

                <BottomContent>
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "#F3F0F1" }}
                  />
                </BottomContent>
              </DetailWrapper>
            </Row>
          ))}
        </GridWrapper>

        <SummaryWrapper>
          <InnerWrapper>
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
            <Skeleton
              variant="text"
              height={40}
              animation="wave"
              sx={{ bgcolor: "#F3F0F1" }}
            />
          </InnerWrapper>
        </SummaryWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const DekstopContent = styled.div`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DekstopAndTabletContent = styled.div`
  display: block;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const TabletContent = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const PhoneContent = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const GridWrapper = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid var(--color-gray-200);

  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  min-width: 125px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export default CartPageLoading;
