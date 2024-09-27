import React from "react";
import Image from "next/image";
import ImageLink from "../ImageLink";
import { ProductImageType } from "@/types/productImage";
import {
  ImageDisplay,
  ImageItem,
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
                <Image
                  src={`data:image/jpeg;base64,${image.imgSrc}`}
                  alt="product image"
                  width={80}
                  height={80}
                  unoptimized
                  style={{
                    aspectRatio: "1 / 1",
                    height: "100%",
                    width: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    objectPosition: `${
                      category === "shoes" ? "bottom" : "top"
                    } center`,
                  }}
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
                <Image
                  src={`data:image/jpeg;base64,${image.imgSrc}`}
                  alt=""
                  width={100}
                  height={110}
                  unoptimized
                  style={{
                    aspectRatio: "1 / 1",
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                    objectPosition: `${
                      category === "shoes" ? "bottom" : "top"
                    } center`,
                  }}
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
