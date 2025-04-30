import React from "react";

export type CheckboxChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface CheckboxProps {
  dataTestId?: string;
  id?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  style?: React.CSSProperties;
  valid?: boolean;
  validityStyles?: boolean;
  value?: string;
  onChange?: (event: CheckboxChangeEvent) => void;
}
