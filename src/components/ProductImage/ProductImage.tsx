import React from "react";
import ImageLink from "../ImageLink";
import { ProductImageType } from "@/types/productImage";
import {
  ImageDisplay,
  ImageItem,
  ImagePrimitive,
  ImageSelect,
  ImageShowcase,
  RowImageDisplay,
  Wrapper,
} from "./style";

interface Props {
  images: ProductImageType[];
  category: string;
}

function ProductImage({ images, category }: Props) {
  return (
    <Wrapper>
      <ImageSelect>
        {images?.map((image) => {
          return (
            <ImageItem key={image.id}>
              <ImageLink id={image.imageIndex}>
                <ImagePrimitive
                  src={`data:image/jpeg;base64,${image.imgSrc}`}
                  alt="product image"
                  width={80}
                  height={80}
                  unoptimized
                  $category={category}
                />
              </ImageLink>
            </ImageItem>
          );
        })}
      </ImageSelect>

      <ImageDisplay>
        <ImageShowcase className="image-showcase">
          {images?.map((image) => {
            return (
              <RowImageDisplay key={image.id}>
                <ImagePrimitive
                  src={`data:image/jpeg;base64,${image.imgSrc}`}
                  alt=""
                  width={100}
                  height={110}
                  unoptimized
                  $category={category}
                />
              </RowImageDisplay>
            );
          })}
        </ImageShowcase>
      </ImageDisplay>
    </Wrapper>
  );
}

export default ProductImage;
