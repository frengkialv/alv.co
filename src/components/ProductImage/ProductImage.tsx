import React from "react";
import ImageLink from "../ImageLink";
import { ProductImageType } from "@/types/productImage";
import {
  ImageDisplay,
  ImageItem,
  // ImagePrimitive,
  ImageSelect,
  ImageShowcase,
  RowImageDisplay,
  Wrapper,
} from "./style";
import ImagePrimitive from "../ImagePrimitive";

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
                  alt="product image"
                  src={image.imgSrc}
                  width={500}
                  height={500}
                  categoryProduct={category}
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
                  alt="product image"
                  src={image.imgSrc}
                  width={500}
                  height={500}
                  categoryProduct={category}
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
