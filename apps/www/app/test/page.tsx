"use client";
import React, { forwardRef, useState } from "react";

// BASE 1
type AccordionItemIndicatorProps = {
  isOpen?: boolean;
  isDisabled?: boolean;
};

type useAccordionItemProps = {
  state?: { selectionManager: { isSelected: (key: string) => boolean } };
  item: { key: string };
};

const useAccordionItem = ({ state, item }: useAccordionItemProps) => {
  const isOpen = state?.selectionManager.isSelected(item.key);
  return { isOpen };
};

interface AccordionItemProps extends AccordionItemIndicatorProps {
  key: string;
  //   item: { key: string };
  state?: { selectionManager: { isSelected: (key: string) => boolean } };
  children: React.ReactNode;
  onClick: () => void;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ isOpen, children, onClick }, ref) => {
    return (
      <div ref={ref}>
        <button onClick={onClick}>{isOpen ? "Open" : "Closed"}</button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

// Accordion component to manage multiple AccordionItems
const Accordion = ({ children }: { children: React.ReactNode }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selectionManager = {
    isSelected: (key: string) => key === selectedKey,
  };

  const toggleItem = (key: string) => {
    setSelectedKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          const key = index.toString();
          return React.cloneElement(child, {
            state: { selectionManager },
            isOpen: selectionManager.isSelected(key),
            onClick: () => toggleItem(key),
          });
        }
        return child;
      })}
    </div>
  );
};

// Test component
export default function Test() {
  return (
    <main>
      <Accordion>
        <AccordionItem
          key="1"
          //   state={{ selectionManager: { isSelected: () => false } }}
          onClick={() => {}}
        >
          <p>Item 1 Content</p>
        </AccordionItem>
        <AccordionItem
          key="2"
          //   state={{ selectionManager: { isSelected: () => false } }}
          onClick={() => {}}
        >
          <p>Item 2 Content</p>
        </AccordionItem>
        <AccordionItem
          key="3"
          //   state={{ selectionManager: { isSelected: () => false } }}
          onClick={() => {}}
        >
          <p>Item 3 Content</p>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
