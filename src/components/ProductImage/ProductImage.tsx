import React from "react";
import DynamicImage from "../DynamicImage";
import ImageLink from "../ImageLink";
import {
  ImageDisplay,
  ImageItem,
  ImageSelect,
  ImageShowcase,
  RowImageDisplay,
  Wrapper,
} from "./style";

function ProductImage() {
  return (
    <Wrapper>
      <ImageSelect>
        <ImageItem>
          <ImageLink id={1}>
            <DynamicImage
              url="/assets/one-life-t-shirt-1.png"
              alt=""
              width={100}
              height={110}
            />
          </ImageLink>
        </ImageItem>
        <ImageItem>
          <ImageLink id={2}>
            <DynamicImage
              url="/assets/one-life-t-shirt-2.png"
              alt=""
              width={100}
              height={110}
            />
          </ImageLink>
        </ImageItem>
        <ImageItem>
          <ImageLink id={3}>
            <DynamicImage
              url="/assets/one-life-t-shirt-3.png"
              alt=""
              width={100}
              height={110}
            />
          </ImageLink>
        </ImageItem>
      </ImageSelect>

      <ImageDisplay>
        <ImageShowcase className="image-showcase">
          <RowImageDisplay>
            <DynamicImage
              url="/assets/one-life-t-shirt-1.png"
              alt=""
              width={100}
              height={110}
            />
          </RowImageDisplay>
          <RowImageDisplay>
            <DynamicImage
              url="/assets/one-life-t-shirt-2.png"
              alt=""
              width={100}
              height={110}
            />
          </RowImageDisplay>
          <RowImageDisplay>
            <DynamicImage
              url="/assets/one-life-t-shirt-3.png"
              alt=""
              width={100}
              height={110}
            />
          </RowImageDisplay>
        </ImageShowcase>
      </ImageDisplay>
    </Wrapper>
  );
}

export default ProductImage;
