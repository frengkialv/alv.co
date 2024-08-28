import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1050 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1050, min: 675 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 675, min: 320 },
    items: 1,
  },
};

function BannerCarousel() {
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlaySpeed={3000}
        arrows={false}
        renderButtonGroupOutside={true}
      >
        <RowImage>
          <ImageWrapper
            src="/assets/banners/banner-phuma-x-rhuigi.png"
            alt=""
            width={240}
            height={100}
            quality={100}
            priority
            unoptimized
          />
        </RowImage>
        <RowImage>
          <ImageWrapper
            src="/assets/banners/benner-1.png"
            alt=""
            width={240}
            height={100}
            quality={100}
            priority
            unoptimized
          />
        </RowImage>
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-right: var(--padding-horizontal-wrapper);
  padding-left: var(--padding-horizontal-wrapper);
  padding-bottom: var(--padding-horizontal-wrapper);
`;

const RowImage = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export default BannerCarousel;
