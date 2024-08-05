// import React from "react";
// import {
//   AriaTabListOptions,
//   useTab,
//   useTabList,
//   useTabPanel,
// } from "react-aria";
// import { Node, TabListState, useTabListState } from "react-stately";

// export function Tabs({ ...props }) {
//   console.log(props);

//   let state = useTabListState(props);
//   let ref = React.useRef(null);
//   let { tabListProps } = useTabList(props, state, ref);
//   return (
//     <div className={`h-36 ${props.orientation || ""}`}>
//       <div {...tabListProps} className="flex" ref={ref}>
//         {[...state.collection].map((item) => (
//           <Tab key={item.key} item={item} state={state} />
//         ))}
//       </div>
//       <TabPanel key={state.selectedItem?.key} state={state} />
//     </div>
//   );
// }

// export function Tab<T>({
//   item,
//   state,
// }: {
//   item: Node<T>;
//   state: TabListState<T>;
// }) {
//   let { key, rendered } = item;
//   let ref = React.useRef(null);
//   let { tabProps } = useTab({ key }, state, ref);
//   return (
//     <div
//       {...tabProps}
//       className="p-5 outline-none cursor-pointer text-zinc-600 border-b-2 border-zinc-600 aria-selected:border-zinc-300 aria-selected:text-zinc-300"
//       ref={ref}
//     >
//       {rendered}
//     </div>
//   );
// }

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

import { Node, TabListState } from "react-stately";
import { useTabs } from "./useTabs";

interface TabProps<T> {
  item: Node<T>;
  state: TabListState<T>;
}

export function Tab<T>({ item, state }: TabProps<T>) {
  const { getTabProps, rendered } = useTabs({ item, state });
  return <div {...getTabProps()}>{rendered}</div>;
}
