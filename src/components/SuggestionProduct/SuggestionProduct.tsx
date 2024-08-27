import React from "react";
import { getNewestData } from "@/data";
import ProductGrid from "../ProductGrid";
import { Dash, HeaderTitle, SpacerNewArrival } from "./style";

function NewArrival() {
  const datas = getNewestData(4);

  return (
    <>
      <SpacerNewArrival />

      <HeaderTitle>You May Also Like</HeaderTitle>

      <ProductGrid datas={datas} />

      <Dash />
    </>
  );
}

export default NewArrival;
