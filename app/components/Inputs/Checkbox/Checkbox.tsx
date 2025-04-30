import React, { useEffect, useRef } from "react";
import {
  Input as ReactstrapInput,
  FormGroup,
  Label,
  FormFeedback,
} from "reactstrap";
import { CheckboxProps } from "./CheckboxProps";

const Checkbox: React.FC<CheckboxProps> = ({
  dataTestId,
  id,
  ariaDescribedBy,
  ariaLabel,
  ariaLabelledBy,
  checked,
  defaultChecked,
  disabled,
  indeterminate = false,
  name,
  style,
  valid,
  validityStyles,
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const validState = validityStyles ? valid : undefined;

  return (
    <div data-test-id={dataTestId}>
      <ReactstrapInput
        innerRef={inputRef}
        id={id}
        type="checkbox"
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        style={style}
        valid={validState === true}
        invalid={validState === false}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </div>
  );
};

export default Checkbox;
