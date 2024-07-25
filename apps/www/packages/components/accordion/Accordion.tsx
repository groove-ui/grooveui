import { forwardRef, useMemo } from "react";

// Utilis?
export type ReactRef<T> =
  | React.RefObject<T>
  | React.MutableRefObject<T>
  | React.Ref<T>;

// System?
export type As<Props = any> = React.ElementType<Props>;
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type HTMLNextUIProps<
  T extends As = "div",
  OmitKeys extends keyof any = never
> = Omit<
  PropsOf<T>,
  | "ref"
  | "color"
  | "slot"
  | "size"
  | "defaultChecked"
  | "defaultValue"
  | OmitKeys
> & {
  as?: As;
};

// UseAccordionItem
export interface Props<T extends object> extends HTMLNextUIProps<"div"> {
  ref?: ReactRef<HTMLButtonElement | null>;
  item: NodeWithProps<T, AccordionItemBaseProps<T>>;
  state: TreeState<T>;
}

export type UseAccordionItemProps<T extends object = {}> = Props<T>;

export interface AccordionItemProps extends UseAccordionItemProps {}

export function useAccodionItem<T extends object = {}>(
  props: UseAccordionItemProps<T>
) {
  const { item, ref } = props;

  const { state, children } = props;

  const isOpen = state.selectionManager.isSelected(item.key);
  const domRef = useDOMRef<HTMLButtonElement>(ref);
  return {
    isOpen,
    children,
    domRef,
  };
}

// This File
const AccordionItem = forwardRef<"button", AccordionItemProps>((props, ref) => {
  const { isOpen, children } = useAccodionItem({ ...props, ref });

  const getContentProps = () => {};
  const getBtnProps = () => {};

  const content = useMemo(() => {
    return <div {...getContentProps}>{children}</div>;
  }, [isOpen, children]);

  return <button {...getBtnProps}>{content}</button>;
});
