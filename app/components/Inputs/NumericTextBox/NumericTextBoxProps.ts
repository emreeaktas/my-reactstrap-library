import React from "react";

export type NumericTextBoxChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface NumericTextBoxProps {
  dataTestId?: string;
  id?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  defaultValue?: number;
  disabled?: boolean;
  max?: number;
  min?: number;
  placeholder?: string;
  step?: number;
  style?: React.CSSProperties;
  valid?: boolean;
  validityStyles?: boolean;
  value?: number;
  onChange?: (event: NumericTextBoxChangeEvent) => void;
}
