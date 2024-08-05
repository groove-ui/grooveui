// import { useRadioGroupState, RadioGroupState } from "react-stately";
// import { useRadioGroup, AriaRadioGroupProps } from "react-aria";
// import { ReactNode } from "react";
// import { createContext } from "vm";

// interface RadioGroupContextValue extends RadioGroupState {}

// const RadioContext = createContext<RadioGroupContextValue | null>(null);

// interface RadioGroupProps extends AriaRadioGroupProps {
//   children?: ReactNode;
//   label?: string;
//   description?: string;
//   errorMessage?: string;
// }

// export function RadioGroup({
//   children,
//   label,
//   description,
//   errorMessage,
//   ...props
// }: RadioGroupProps) {
//   let state = useRadioGroupState(props);
//   let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
//     useRadioGroup(props, state);

//   return (
//     <div {...radioGroupProps}>
//       {label && <span {...labelProps}>{label}</span>}
//       <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
//       {description && (
//         <div {...descriptionProps} style={{ fontSize: 12 }}>
//           {description}
//         </div>
//       )}
//       {errorMessage && state.isInvalid && (
//         <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
//           {errorMessage}
//         </div>
//       )}
//     </div>
//   );
// }
