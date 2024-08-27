"use client";
import React from "react";
import styled from "styled-components";
import { BreadcrumbList, CrumbLink, CrumbWrapper } from "./style";

function Crumb({
  href,
  isCurrentPage,
  children,
}: {
  href: string;
  isCurrentPage?: boolean;
  children: React.ReactNode;
}) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} isCurrentPage={isCurrentPage}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

function BreadCrumbs() {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/living">Detail</Crumb>
        <Crumb href="/living/couch" isCurrentPage={true}>
          T-shirts
        </Crumb>
      </BreadcrumbList>
    </nav>
  );
}

export default BreadCrumbs;
