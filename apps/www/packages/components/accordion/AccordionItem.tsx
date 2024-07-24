"use client";

import React, { ReactNode, useState } from "react";

interface AccordionItemProps {
  key: string;
  title: string;
  children: ReactNode;
}

// const AccordionItemNew = React.forwardRef<"button", AccordionItemProps>((props, ref) => (
//   const {Component} = useAccordionItem({...props, ref})
// ));

export const AccordionItem: React.FC<AccordionItemProps> = ({
  key,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div key={key}>
      <button onClick={toggle}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

// Main Container
interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Accordion;
