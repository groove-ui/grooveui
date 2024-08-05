"use client";

import { useRef } from "react";
import { useTabPanel } from "react-aria";
import { TabListState } from "react-stately";

interface TabPanelProps<T> {
  state: TabListState<T>;
}

// interface TabPanelProps<T> {
//   state: TabListState<T>;
// }

// export function TabPanel<T>({ state, ...props }: TabPanelProps<T>) {
//   let ref = React.useRef(null);
//   let { tabPanelProps } = useTabPanel(props, state, ref);
//   return (
//     <div {...tabPanelProps} className="flex" ref={ref}>
//       {state.selectedItem?.props.children}
//     </div>
//   );
// }

export function TabPanel<T>({ state, ...props }: TabPanelProps<T>) {
  let ref = useRef(null);
  let { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <div {...tabPanelProps} className="flex" ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}
