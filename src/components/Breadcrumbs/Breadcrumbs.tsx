import React from "react";
import styled from "styled-components";

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
      <CrumbLink href={href} aria-current={isCurrentPage ? "page" : undefined}>
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

const BreadcrumbList = styled.ol`
  padding: 20px 0 30px 0;
  margin: 0;
  list-style-type: none;
  border-top: 1px solid #dad8d8;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;

  &:not(:first-of-type) {
    &:before {
      content: ">";
      font-size: 20px;
      color: var(--color-gray-600);
      font-family: monospace;
      margin-left: var(--spacing);
      margin-right: 12px;
    }
  }
`;

const CrumbLink = styled.a`
  color: #817f7f;
  text-decoration: none;

  &[aria-current] {
    color: var(--color-black);
  }

  &:hover {
    text-decoration: revert;
  }
`;

export default BreadCrumbs;
