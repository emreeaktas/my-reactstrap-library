import React from "react";

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface FormComponentValidity {
  badInput?: boolean;
  customError: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  stepMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
  valid: boolean;
  valueMissing: boolean;
}

export interface InputHandle {
  element: null | HTMLInputElement;
  name: undefined | string;
  props: Readonly<InputProps>;
  validity: FormComponentValidity;
  value: undefined | string | number | string[];
}

export interface InputProps {
  dataTestId?: string;
  id?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  defaultValue?: string | string[];
  placeholder?: string;
  style?: React.CSSProperties;
  valid?: boolean;
  validityStyles?: boolean;
  value?: string | number | string[];
  onChange?: (event: InputChangeEvent) => void;
}
