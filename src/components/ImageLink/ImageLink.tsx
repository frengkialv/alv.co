"use client";
import React from "react";
import styled from "styled-components";
import { DetailContext } from "../Provider/DetailProvider";

function ImageLink({
  id,
  children,
}: {
  id: number;
  children: React.ReactNode;
}) {
  const { setSelectedImageId } = React.useContext(DetailContext);

  return (
    <ImageLinkWrapper onClick={() => setSelectedImageId(id)}>
      {children}
    </ImageLinkWrapper>
  );
}

const ImageLinkWrapper = styled.a`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export default ImageLink;
