// export interface HTMLNextUIProps
//   extends Ommit<ModalProviderProps, "children">,
//     ProviderContextProps {
//   children: React.ReactNode;
//   navigate?: (path: string) => void;
// }

// export interface Props<T extends object> extends HTMLNextUIProps<"div"> {
//   ref?: ReactRef<HTMLButtonElement | null>;
//   /**
//    * The item node.
//    */
//   item: NodeWithProps<T, AccordionItemBaseProps<T>>;
//   /**
//    * The accordion tree state.
//    */
//   state: TreeState<T>;
//   /**
//    * Current focused key.
//    */
//   focusedKey: React.Key | null;
//   /**
//    * Callback fired when the focus state changes.
//    */
//   onFocusChange?: (isFocused: boolean, key?: React.Key) => void;
// }

// export type UseAccordionItemProps<T extends object = {}> = Props<T> &
//   AccordionItemVariantProps &
//   Omit<AccordionItemBaseProps, "onFocusChange">;
