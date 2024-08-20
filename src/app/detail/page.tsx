"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Wrapper>
      <Breadcrumbs />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --padding-horizontal: clamp(1rem, 14vw - 5rem, 6.25rem);
  padding-right: var(--padding-horizontal);
  padding-left: var(--padding-horizontal);
`;

export default Detail;
