import { useRadioGroupState, RadioGroupState } from "react-stately";
import { useRadio, useRadioGroup, AriaRadioGroupProps } from "react-aria";
import React, { createContext, ReactNode, useContext, useRef } from "react";

interface RadioGroupContextValue extends RadioGroupState {}

const RadioContext = createContext<RadioGroupContextValue | null>(null);

interface RadioGroupProps extends AriaRadioGroupProps {
  children?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function RadioGroup({
  children,
  label,
  description,
  errorMessage,
  ...props
}: RadioGroupProps) {
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      {label && <span {...labelProps}>{label}</span>}
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && state.isInvalid && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

interface RadioProps {
  children?: ReactNode;
  description?: string | ReactNode;
  value: string;
}

export function Radio({ children, ...props }: RadioProps) {
  let state = useContext(RadioContext);
  let ref = useRef<HTMLInputElement | null>(null);
  if (!state) {
    throw new Error("Radio must be used within a RadioGroup");
  }
  let { inputProps } = useRadio(props, state, ref);

  return (
    <label className="flex items-center gap-2 border border-white">
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}
