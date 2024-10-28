"use client";
import Image from "next/image";
import styled from "styled-components";

interface IKImageProps extends React.HTMLProps<HTMLDivElement> {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  categoryProduct?: string;
}

function ImagePrimitive({
  alt,
  src,
  width,
  height,
  categoryProduct,
  ...delegated
}: IKImageProps) {
  let objectPosition = "center";

  if (categoryProduct === "t-shirts") {
    objectPosition += " top";
  } else if (categoryProduct === "shoes") {
    objectPosition += " 30%";
  } else if (categoryProduct === "accessories") {
    objectPosition += " 70%";
  }

  return (
    <Wrapper {...delegated}>
      <ImageComponent
        alt={alt}
        src={src}
        width={width}
        height={height}
        priority
        unoptimized
        style={{
          objectPosition,
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageComponent = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: auto;
  aspect-ratio: 0.8 / 1;
  object-fit: cover;
`;

export default ImagePrimitive;
