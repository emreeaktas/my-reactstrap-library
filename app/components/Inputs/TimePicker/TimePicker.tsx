import React from "react";
import { TimePickerProps } from "./TimePickerProps";
import { TimePicker as KendoTimePicker } from "@progress/kendo-react-dateinputs";

const TimePicker: React.FC<TimePickerProps> = ({
  dataTestId,
  adaptive,
  adaptiveTitle,
  ariaDescribedBy,
  ariaLabelledBy,
  cancelButton,
  className,
  dateInput,
  defaultShow,
  defaultValue,
  disabled,
  fillMode,
  format,
  formatPlaceholder,
  id,
  label,
  max,
  min,
  name,
  nowButton,
  placeholder,
  popup,
  popupSettings,
  required,
  rounded,
  show,
  size,
  smoothScroll,
  steps,
  tabIndex,
  title,
  valid,
  validationMessage,
  validityStyles,
  value,
  width,
  onBlur,
  onChange,
  onClose,
  onFocus,
  onOpen,
}) => (
  <div data-test-id={dataTestId}>
    <KendoTimePicker
      adaptive={adaptive}
      adaptiveTitle={adaptiveTitle}
      ariaDescribedBy={ariaDescribedBy}
      ariaLabelledBy={ariaLabelledBy}
      cancelButton={cancelButton}
      className={className}
      dateInput={dateInput}
      defaultShow={defaultShow}
      defaultValue={defaultValue}
      disabled={disabled}
      fillMode={fillMode}
      format={format}
      formatPlaceholder={formatPlaceholder}
      id={id}
      label={label}
      max={max}
      min={min}
      name={name}
      nowButton={nowButton}
      placeholder={placeholder}
      popup={popup}
      popupSettings={popupSettings}
      required={required}
      rounded={rounded}
      show={show}
      size={size}
      smoothScroll={smoothScroll}
      steps={steps}
      tabIndex={tabIndex}
      title={title}
      valid={valid}
      validationMessage={validationMessage}
      validityStyles={validityStyles}
      value={value}
      width={width}
      onBlur={onBlur}
      onChange={onChange}
      onClose={onClose}
      onFocus={onFocus}
      onOpen={onOpen}
    />
  </div>
);

export default TimePicker;
