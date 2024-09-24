"use client";
import React from "react";
import LoadingComponent from "../LaodingComponent/LaodingComponent";
import { CategoryContext } from "../Provider/CategoryProvider";

function LoadingCategoryPage() {
  const { isLoading } = React.useContext(CategoryContext);

  return <LoadingComponent isLoading={isLoading} />;
}

export default LoadingCategoryPage;
