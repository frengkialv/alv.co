import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Rating from "../Rating";
import styles from "./styles.module.css";
import Spacer from "../Spacer";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VerifiedLogo from "../SVG/VerifiedLogo";
import { Size } from "@/type";
import { QUERIES } from "@/constants";
import { TESTIMONIALS } from "@/data";

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
  // <ButtonOne className={currentSlide === 0 ? 'disable' : ''} />
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

function Test() {
  return (
    <Wrapper>
      <Header>OUR HAPPY CUSTOMERS</Header>
      <Spacer size={20} />
      <InnerWrapper>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlaySpeed={3000}
          containerClass={styles.container}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {TESTIMONIALS.map((testimoni, index) => (
            <Card key={index}>
              <Rating rating={testimoni.rating} size={Size.MEDIUM} />
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
  padding-right: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-left: clamp(1rem, 14vw - 5rem, 6.25rem);
`;

const Header = styled.h1`
  font-family: var(--integral-cf);
  font-size: ${48 / 16}rem;
  max-width: 80%;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${28 / 16}rem;
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
  top: -65px;
  right: 0;

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

export default Test;
