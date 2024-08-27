import React from "react";
import InformationContent from "../InformationContent";
import { ImageWrapper, ModelContent, Wrapper } from "./style";

function MarketingContent() {
  return (
    <Wrapper>
      <InformationContent />
      <ModelContent>
        <ImageWrapper />
      </ModelContent>
    </Wrapper>
  );
}

export default MarketingContent;
