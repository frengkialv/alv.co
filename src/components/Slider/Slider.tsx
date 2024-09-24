"use client";
import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./styles.module.css";
import { CategoryContext } from "../Provider/CategoryProvider";

interface Props {
  value: number[];
  onValueChange: (val: number[]) => void;
}

function SliderPrice() {
  const { priceFilter, setPriceFilter } = React.useContext(CategoryContext);

  return (
    <div className={styles.wrapper}>
      <SliderPrimitive.Root
        className={styles.root}
        value={priceFilter}
        onValueChange={(val) => setPriceFilter(val)}
        step={5}
        minStepsBetweenThumbs={20}
        max={500}
      >
        <SliderPrimitive.Track className={styles.track}>
          <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={styles.thumb}>
          <div className={styles["wrapper-value-thumb"]}>
            <div className={styles["value-thumb"]}>${priceFilter[0]}</div>
          </div>
        </SliderPrimitive.Thumb>
        <SliderPrimitive.Thumb className={styles.thumb}>
          <div className={styles["wrapper-value-thumb"]}>
            <div className={styles["value-thumb"]}>${priceFilter[1]}</div>
          </div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
export default SliderPrice;
