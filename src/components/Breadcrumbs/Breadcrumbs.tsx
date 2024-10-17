"use client";
import React from "react";
import {
  BreadcrumbList,
  CrumbLink,
  CrumbLinkWrapper,
  CrumbText,
  CrumbWrapper,
} from "./style";
import Icon from "../Icon";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

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
      {!isCurrentPage && (
        <CrumbLink href={href}>
          {children}
          <Icon id="chevron-right" size={16} strokeWidth={1.5} />
        </CrumbLink>
      )}

      {isCurrentPage && <CrumbText>{children}</CrumbText>}
    </CrumbWrapper>
  );
}

function BreadCrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        borderTop: "1px solid #dad8d8",
      }}
    >
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isCurrentPage = breadcrumbs.length - 1 === index;
          return (
            <Crumb href={crumb.href} isCurrentPage={isCurrentPage} key={index}>
              {crumb.label}
            </Crumb>
          );
        })}
      </BreadcrumbList>
    </nav>
  );
}

export default BreadCrumbs;
