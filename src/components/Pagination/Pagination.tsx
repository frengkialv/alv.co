import React from "react";
import Icon from "../Icon";
import usePagination from "@/hooks/usePagination";
import {
  ButtonDekstop,
  ButtonMobile,
  NumberButton,
  Wrapper,
  WrapperPage,
} from "./styles";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (val: number) => void;
}

function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const rowButton = usePagination(page, totalPages);
  const dot = "...";

  return (
    <Wrapper>
      <ButtonDekstop
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
      </ButtonDekstop>
      <ButtonMobile
        $disabled={page === 1}
        onClick={() => {
          if (page === 1) {
            return;
          }
          onChange(Number(page - 1));
        }}
      >
        <Icon id="chevron-left" size={20} strokeWidth={1.8} />
      </ButtonMobile>
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
      <ButtonDekstop
        $disabled={page === totalPages}
        onClick={() => {
          if (page === totalPages) {
            return;
          }
          onChange(Number(page + 1));
        }}
      >
        Next
        <Icon id="arrow-right" size={20} strokeWidth={1.8} />
      </ButtonDekstop>
      <ButtonMobile
        $disabled={page === totalPages}
        onClick={() => {
          if (page === totalPages) {
            return;
          }
          onChange(Number(page + 1));
        }}
      >
        <Icon id="chevron-right" size={20} strokeWidth={1.8} />
      </ButtonMobile>
    </Wrapper>
  );
}

export default Pagination;
