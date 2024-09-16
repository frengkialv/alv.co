"use client";
import React from "react";
import styled from "styled-components";
import Pagination from "../Pagination/Pagination";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (val: number) => void;
}

function PaginationWrapperCategoryPage({
  page,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <Wrapper>
      <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20px;
`;

export default PaginationWrapperCategoryPage;
