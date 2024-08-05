import classNames from "clsx";
import { useRef } from "react";
import { useTab, useTabList } from "react-aria";
import { Node, TabListState, useTabListState } from "react-stately";

interface TabProps<T> {
  item: Node<T>;
  state: TabListState<T>;
}

export function useTabs<T>({ item, state, ...props }: TabProps<T>) {
  // Tab
  let { key, rendered } = item;
  let refTab = useRef(null);
  let { tabProps } = useTab({ key }, state, refTab);

  // Tabs
  let stateTabs = useTabListState(props);
  let ref = useRef(null);
  let { tabListProps } = useTabList(props, state, ref);

  const getTabsProps = () => {
    return {};
  };

  const getTabProps = () => {
    return {
      ...tabProps,
      ref: refTab,
      className: classNames(
        `p-5 outline-none cursor-pointer text-zinc-600 border-b-2 border-zinc-600 aria-selected:border-zinc-300 aria-selected:text-zinc-300`
      ),
    };
  };

  return { getTabProps, rendered };
}
