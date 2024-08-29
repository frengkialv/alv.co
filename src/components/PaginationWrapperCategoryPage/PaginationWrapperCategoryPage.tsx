"use client";
import React from "react";
import Pagination from "../Pagination/Pagination";
import { ClothingsType } from "@/type";
import styled from "styled-components";

function PaginationWrapperCategoryPage({ datas }: { datas: ClothingsType[] }) {
  const [page, setPage] = React.useState<number>(1);

  const handleChange = (val: number) => {
    setPage(val);
  };

  return (
    <Wrapper>
      <Pagination page={page} totalPage={9} onChange={handleChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20px;
`;

export default PaginationWrapperCategoryPage;
