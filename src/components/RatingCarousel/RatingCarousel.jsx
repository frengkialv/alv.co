"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import styles from "./styles.module.css";
import Spacer from "../Spacer";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VerifiedLogo from "../SVG/VerifiedLogo";
import Rating, { RatingSize } from "../Rating";
import { QUERIES } from "@/constants";
import { TESTIMONIALS } from "@/data";
import { MainWrapperContext } from "../Provider/MainWrapperProvider";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1050 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1050, min: 675 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 675, min: 320 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <ArrowWrapper>
      <UnstyledButton onClick={() => previous()}>
        <Icon id="arrow-left" strokeWidth={2.5} />
      </UnstyledButton>
      <UnstyledButton onClick={() => next()}>
        <Icon id="arrow-right" strokeWidth={2.5} />
      </UnstyledButton>
    </ArrowWrapper>
  );
};

function RatingCarousel() {
  const { width } = React.useContext(MainWrapperContext);

  return (
    <Wrapper>
      <Header>OUR HAPPY CUSTOMERS</Header>
      {width <= 675 && <Spacer size={25} />}
      {width > 675 && <Spacer size={35} />}

      <InnerWrapper>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          infinite={true}
          containerClass={styles.container}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {TESTIMONIALS.map((testimoni, index) => (
            <Card key={index}>
              <Rating rating={testimoni.rating} size={RatingSize.MEDIUM} />
              <NameWrapper>
                <Name>{testimoni.name}</Name>
                <VerifiedLogo />
              </NameWrapper>

              <Testimonoal>{testimoni.testimonial}</Testimonoal>
            </Card>
          ))}
        </Carousel>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
  margin-top: 40px;
`;

const Header = styled.h1`
  font-family: var(--integral-cf);
  font-size: ${48 / 16}rem;
  line-height: 45px;
  max-width: 80%;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: ${36 / 16}rem;
    line-height: 35px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
    line-height: 35px;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
`;

const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 12px;
  top: -68px;
  right: 0;

  @media ${QUERIES.tabletAndSmaller} {
    top: -60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    top: -53px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
  height: 100%;
  padding: 28px 30px;
  border: 2px solid #dad8d8;
  border-radius: 10px;
  margin: 0 10px;

  @media ${QUERIES.phoneAndSmaller} {
    height: unset;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Name = styled.span`
  font-size: ${20 / 16}rem;
  font-weight: 700;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Testimonoal = styled.p`
  color: #666666;

  &::before {
    content: "“";
  }

  &::after {
    content: "“";
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

export default RatingCarousel;
