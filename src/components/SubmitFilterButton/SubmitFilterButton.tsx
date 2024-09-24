"use client";
import React from "react";
import Button from "../Button";
import { CategoryContext } from "../Provider/CategoryProvider";

function SubmitFilterButton() {
  const { submitFilter } = React.useContext(CategoryContext);

  return (
    <Button grow={true} onClick={submitFilter}>
      Apply Filter
    </Button>
  );
}

export default SubmitFilterButton;
