"use client";
import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./styles.module.css";

interface Props {
  value: number[];
  onValueChange: (val: number[]) => void;
}

function SliderPrice({ value, onValueChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <SliderPrimitive.Root
        className={styles.root}
        value={value}
        onValueChange={(val) => onValueChange(val)}
        step={5}
        minStepsBetweenThumbs={20}
        max={500}
      >
        <SliderPrimitive.Track className={styles.track}>
          <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={styles.thumb}>
          <div className={styles["wrapper-value-thumb"]}>
            <div className={styles["value-thumb"]}>${value[0]}</div>
          </div>
        </SliderPrimitive.Thumb>
        <SliderPrimitive.Thumb className={styles.thumb}>
          <div className={styles["wrapper-value-thumb"]}>
            <div className={styles["value-thumb"]}>${value[1]}</div>
          </div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}
export default SliderPrice;
