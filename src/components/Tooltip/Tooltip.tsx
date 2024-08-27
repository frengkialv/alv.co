"use client";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  text: string;
}

const TooltipContent = ({ children, text }: Props) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.TooltipContent} sideOffset={5}>
            {text}
            <Tooltip.Arrow className={styles.TooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipContent;
