"use client";
import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import styles from "./styles.module.css";

interface HoverCardProps {
  trigger: React.ReactNode;
  sideOffsite?: number;
  children?: React.ReactNode;
}

function HoverCard({ trigger, children, sideOffsite = 0 }: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root openDelay={300}>
      <HoverCardPrimitive.Trigger asChild>
        <div className={styles.ImageTrigger}>{trigger}</div>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          className={styles.Content}
          sideOffset={sideOffsite}
          collisionPadding={{ right: 30 }}
        >
          {children}
          <HoverCardPrimitive.Arrow
            className={styles.Arrow}
            width={15}
            height={6}
          />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
}

export default HoverCard;
