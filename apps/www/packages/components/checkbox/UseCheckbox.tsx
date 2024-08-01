import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { AriaCheckboxProps } from "@react-types/checkbox";
import { useFocusRing } from "@react-aria/focus";
import { useRef } from "react";
import classNames from "clsx";

export const useCheckboxM = (props: AriaCheckboxProps) => {
  const { isDisabled, children } = { ...props };
  const state = useToggleState(props);
  const { isSelected } = state;
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { focusProps } = useFocusRing();

  const getLabelProps = () => {
    return {
      className: classNames(
        `flex items-center gap-2 ${
          isDisabled ? "text-zinc-500" : "cursor-pointer"
        }`
      ),
    };
  };

  return {
    isDisabled,
    isSelected,
    inputProps,
    focusProps,
    ref,
    children,
    getLabelProps,
  };
};

// const wrapperClassName = classNames("flex items-center group cursor-pointer");

// const checkboxClassName = classNames(
//   state.isSelected
//     ? "bg-indigo-500 group-active:bg-indigo-600 text-white"
//     : "transparent text-transparent",
//   "border-gray-300",
//   "border-2",
//   "peer-hover:bg-sky-700",
//   "rounded",
//   props.isDisabled
//     ? "border-gray-300"
//     : isFocusVisible || state.isSelected
//     ? "border-indigo-500 group-active:border-indigo-600"
//     : "border-gray-500 group-active:border-gray-600",
//   "w-5",
//   "h-5",
//   "flex",
//   "flex-shrink-0",
//   "justify-center",
//   "items-center",
//   "mr-2",
//   isFocusVisible ? "shadow-outline" : "",
//   "transition",
//   "ease-in-out",
//   "duration-150"
// );

// const labelClassName = classNames(
//   props.isDisabled
//     ? "text-gray-400"
//     : "text-gray-700 group-active:text-gray-800",
//   "select-none transition-500"
// );
