"use client";
import React from "react";
import styled from "styled-components";

export const CrumbLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return <CrumbLinkStyle href={href}>{children}</CrumbLinkStyle>;
};

export const BreadcrumbList = styled.ol`
  padding: 16px 0;
  margin: 0;
  list-style-type: none;
  border-top: 1px solid #dad8d8;
`;

export const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;

  &:not(:first-child) {
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
  color: var(--color-gray-500);
  text-decoration: none;
  font-weight: 500;

  &[aria-current] {
    color: var(--color-black);
  }

  &:hover {
    text-decoration: revert;
  }
`;

export const CrumbText = styled.span`
  color: var(--color-black);
  font-weight: 500;
`;
