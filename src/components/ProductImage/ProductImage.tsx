import { QUERIES } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function ProductImage() {
  const [selectedImageId, setSelectedImageId] = React.useState(1);

  React.useEffect(() => {
    slideImage();

    function slideImage() {
      const displayWidth: number = document.querySelector(
        ".image-showcase img:first-child"
      )?.clientWidth as number;

      const slideHandler =
        document.querySelector<HTMLElement>(".image-showcase");

      if (slideHandler) {
        slideHandler.style.transform = `translateX(${
          -(selectedImageId - 1) * displayWidth
        }px)`;
      }
    }

    window.addEventListener("resize", slideImage);

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [selectedImageId]);

  return (
    <Wrapper>
      <ImageSelect className="image-select">
        <ImageItem>
          <ImageLink onClick={() => setSelectedImageId(1)}>
            <ImageWrapper
              src="/assets/one-life-t-shirt-1.png"
              alt=""
              width={100}
              height={110}
              quality={100}
              priority
            />
          </ImageLink>
        </ImageItem>
        <ImageItem>
          <ImageLink onClick={() => setSelectedImageId(2)}>
            <ImageWrapper
              src="/assets/one-life-t-shirt-2.png"
              alt=""
              width={100}
              height={110}
              quality={100}
              priority
            />
          </ImageLink>
        </ImageItem>
        <ImageItem>
          <ImageLink onClick={() => setSelectedImageId(3)}>
            <ImageWrapper
              src="/assets/one-life-t-shirt-3.png"
              alt=""
              width={100}
              height={110}
              quality={100}
              priority
            />
          </ImageLink>
        </ImageItem>
      </ImageSelect>

      <ImageDisplay>
        <ImageShowcase className="image-showcase">
          <RowImageDisplay>
            <ImageWrapperDisplay
              className="test"
              src="/assets/one-life-t-shirt-1.png"
              alt=""
              width={380}
              height={490}
              quality={100}
              priority
            />
          </RowImageDisplay>
          <RowImageDisplay>
            <ImageWrapperDisplay
              src="/assets/one-life-t-shirt-2.png"
              alt=""
              width={380}
              height={490}
              quality={100}
              priority
            />
          </RowImageDisplay>
          <RowImageDisplay>
            <ImageWrapperDisplay
              src="/assets/one-life-t-shirt-3.png"
              alt=""
              width={380}
              height={490}
              quality={100}
              priority
            />
          </RowImageDisplay>
        </ImageShowcase>
      </ImageDisplay>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  gap: 14px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
  }
`;

const ImageSelect = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    flex: none;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
  }
`;

const ImageItem = styled.div`
  height: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    height: auto;
  }
`;

const ImageLink = styled.a`
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
  object-position: center top;
`;

const RowImageDisplay = styled.div`
  min-height: 100%;
  min-width: 100%;
`;

const ImageWrapperDisplay = styled(Image)`
  display: block;
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const ImageDisplay = styled.div`
  flex: 3;
  border-radius: 14px;
  overflow: hidden;
`;

const ImageShowcase = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;

  transition: all 0.5s ease;
`;

export default ProductImage;
