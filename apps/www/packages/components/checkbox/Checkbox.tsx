import type { AriaCheckboxProps } from "@react-types/checkbox";
import { mergeProps } from "@react-aria/utils";
import { useCheckboxM } from "./UseCheckbox";

export function Checkbox(props: AriaCheckboxProps) {
  const {
    isDisabled,
    isSelected,
    inputProps,
    focusProps,
    ref,
    children,
    getLabelProps,
  } = useCheckboxM(props);

  return (
    <label {...getLabelProps()}>
      <input
        {...mergeProps(inputProps, focusProps)}
        ref={ref}
        className="hidden peer"
      />
      <div
        className={`w-5 h-5 border-2  rounded-md flex justify-center items-center transition duration-300 ${
          isSelected
            ? "bg-zinc-300 border-zinc-300"
            : "bg-transparent peer-hover:bg-zinc-700 border-zinc-400"
        } ${isDisabled ? "border-zinc-500 bg-zinc-500" : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 18 18" className="stroke-current w-3 h-3 text-black">
          <polyline
            points="1 9 7 14 15 4"
            fill="none"
            strokeWidth={2}
            strokeDasharray={22}
            strokeDashoffset={isSelected ? 44 : 66}
            style={{
              transition: "all 400ms",
            }}
          />
        </svg>
      </div>
      <span className="select-none">{children}</span>
    </label>
  );
}
