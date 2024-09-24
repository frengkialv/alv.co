"use client";
import React from "react";
import styled from "styled-components";
import Pagination from "../Pagination/Pagination";
import { CategoryContext } from "../Provider/CategoryProvider";

interface Props {
  page: number;
  totalPages: number;
}

function PaginationWrapperCategoryPage({ page, totalPages }: Props) {
  const { onChangePageHandler } = React.useContext(CategoryContext);

  return (
    <Wrapper>
      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={onChangePageHandler}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20px;
`;

export default PaginationWrapperCategoryPage;
