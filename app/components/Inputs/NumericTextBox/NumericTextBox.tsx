import React from "react";
import {
  Input as ReactstrapInput,
  FormGroup,
  Label,
  FormFeedback,
} from "reactstrap";
import { NumericTextBoxProps } from "./NumericTextBoxProps";

const NumericTextBox: React.FC<NumericTextBoxProps> = ({
  dataTestId,
  id,
  ariaDescribedBy,
  ariaLabel,
  ariaLabelledBy,
  defaultValue,
  disabled,
  max,
  min,
  placeholder,
  step,
  style,
  valid,
  validityStyles,
  value,
  onChange,
}) => {
  const validState = validityStyles ? valid : undefined;

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur();
  };

  return (
    <div data-test-id={dataTestId}>
      <ReactstrapInput
        id={id}
        type="number"
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        defaultValue={defaultValue}
        disabled={disabled}
        max={max}
        min={min}
        placeholder={placeholder}
        step={step}
        style={style}
        valid={validState === true}
        invalid={validState === false}
        value={value}
        onWheel={handleWheel}
        onChange={(e) => {
          if (onChange) {
            const numericValue =
              e.target.value !== "" ? parseFloat(e.target.value) : undefined;
            const newEvent = {
              ...e,
              target: {
                ...e.target,
                value: numericValue,
              },
            };
            onChange(newEvent as any);
          }
        }}
      />
    </div>
  );
};

export default NumericTextBox;
