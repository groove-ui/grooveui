"use client";

import React, { FC, ReactNode } from "react";

// Accordion Item Props
interface AccordionItemProps {
  key: string;
  isOpen?: boolean;
  onItemClick?: () => void;
  title: string;
  children: ReactNode;
}

// Accordion Item Component
const AccordionItem: FC<AccordionItemProps> = ({
  key,
  isOpen,
  onItemClick,
  title,
  children,
}) => {
  return (
    <div key={key}>
      <button onClick={onItemClick}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
