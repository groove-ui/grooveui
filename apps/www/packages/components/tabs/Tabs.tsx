import { useTabList } from "react-aria";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
// import { useTabs } from "./useTabs";
import { useRef } from "react";
import { useTabListState } from "react-stately";

// 1 Herarchy
export function Tabs({ ...props }) {
  let state = useTabListState(props);
  let ref = useRef(null);
  let { tabListProps } = useTabList(props, state, ref);

  return (
    <div className={`h-36 ${props.orientation || ""}`}>
      <div {...tabListProps} className="flex" ref={ref}>
        {[...state.collection].map((item) => {
          return <Tab key={item.key} item={item} state={state} />;
        })}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  );
}

// export function Tabs({ ...props }) {
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
