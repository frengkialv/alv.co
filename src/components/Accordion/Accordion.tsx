import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import styles from "./styles.module.css";
import Icon from "../Icon";

type AccordionProps = {
  value: string;
  header: string | React.ReactNode;
  children: React.ReactNode;
};

function Accordion({ value, header, children }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      defaultValue={value}
      type="single"
      className={styles.accordionRoot}
      collapsible
    >
      <AccordionPrimitive.Item value={value} className={styles.accordionItem}>
        <AccordionPrimitive.Header className={styles.accordionHeader}>
          <AccordionPrimitive.Trigger className={styles.accordionTrigger}>
            {header}
            <Icon
              id="chevron-down"
              size={20}
              strokeWidth={2}
              className={styles.chevronIcon}
            />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className={styles.accordionContent}>
          {children}
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}

export default Accordion;
