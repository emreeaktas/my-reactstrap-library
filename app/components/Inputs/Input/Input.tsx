import React from "react";
import { Input as ReactstrapInput } from "reactstrap";
import { InputProps } from "./InputProps";

const Input: React.FC<InputProps> = ({
  dataTestId,
  id,
  ariaDescribedBy,
  ariaLabel,
  ariaLabelledBy,
  defaultValue,
  placeholder,
  style,
  valid,
  validityStyles,
  value,
  onChange,
}) => {
  const validState = validityStyles ? valid : undefined;

  return (
    <div data-test-id={dataTestId}>
      <ReactstrapInput
        id={id}
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
        valid={validState === true}
        invalid={validState === false}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </div>
  );
};

export default Input;
