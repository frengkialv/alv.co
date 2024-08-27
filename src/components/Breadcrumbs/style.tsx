"use client";
import React from "react";
import styled from "styled-components";

export const CrumbLink = ({
  children,
  href,
  isCurrentPage,
}: {
  children: React.ReactNode;
  href: string;
  isCurrentPage?: boolean;
}) => {
  return (
    <CrumbLinkStyle
      href={href}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {children}
    </CrumbLinkStyle>
  );
};

export const BreadcrumbList = styled.ol`
  padding: 20px 0 30px 0;
  margin: 0;
  list-style-type: none;
  border-top: 1px solid #dad8d8;
`;

export const CrumbWrapper = styled.li`
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

const CrumbLinkStyle = styled.a`
  color: #817f7f;
  text-decoration: none;

  &[aria-current] {
    color: var(--color-black);
  }

  &:hover {
    text-decoration: revert;
  }
`;
