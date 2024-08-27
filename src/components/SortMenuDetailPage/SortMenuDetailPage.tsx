"use client";
import React from "react";
import { DetailContext } from "../Provider/DetailProvider";
import SortDialogMenu from "../SortDialogMenu";
import { SortOptions } from "@/constants";

function SortMenuDetailPage() {
  const { showShowDialogMenu, setShowSortDialogMenu, handleSortChange, sort } =
    React.useContext(DetailContext);
  return (
    <SortDialogMenu
      open={showShowDialogMenu}
      sort={sort}
      sortOptions={SortOptions}
      handleSortChange={handleSortChange}
      handleShowSortDialogMenu={setShowSortDialogMenu}
    />
  );
}

export default SortMenuDetailPage;
