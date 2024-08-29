"use client";
import React from "react";
import Icon from "../Icon";
import { Button, NumberButton, Wrapper, WrapperPage } from "./styles";
import usePagination from "@/hooks/usePagination";

interface PaginationProps {
  page: number;
  totalPage: number;
  onChange: (val: number) => void;
}

function Pagination({ page, totalPage, onChange }: PaginationProps) {
  const rowButton = usePagination(page, totalPage);
  const dot = "...";

  return (
    <Wrapper>
      <Button
        $disabled={page === 1}
        onClick={() => {
          if (page === 1) {
            return;
          }
          onChange(Number(page - 1));
        }}
      >
        <Icon id="arrow-left" size={20} strokeWidth={1.8} />
        Previous
      </Button>
      <WrapperPage>
        {rowButton.map((pageNumber, index) => (
          <NumberButton
            key={index}
            $selected={pageNumber === page}
            $disabled={pageNumber === dot}
            disabled={pageNumber === dot}
            onClick={() => onChange(Number(pageNumber))}
          >
            {pageNumber}
          </NumberButton>
        ))}
      </WrapperPage>
      <Button
        $disabled={page === totalPage}
        onClick={() => {
          if (page === totalPage) {
            return;
          }
          onChange(Number(page + 1));
        }}
      >
        Next
        <Icon id="arrow-right" size={20} strokeWidth={1.8} />
      </Button>
    </Wrapper>
  );
}

export default Pagination;
