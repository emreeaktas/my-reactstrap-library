import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TimePickerProps } from "../TimePickerProps";
import TimePicker from "../TimePicker";

const CustomDateInputComponent: React.FC = () => {
  return <input className="custom-date-input" />;
};

const CustomPopupComponent: React.FC = () => {
  return <div className="custom-popup" />;
};

describe("TimePicker Component", () => {
  const props: TimePickerProps = {
    dataTestId: "test-id",
    adaptive: true,
    adaptiveTitle: "Adaptive TimePicker",
    ariaDescribedBy: "description-id",
    ariaLabelledBy: "label-id",
    cancelButton: true,
    className: "custom-timepicker",
    dateInput: CustomDateInputComponent,
    defaultShow: true,
    defaultValue: new Date(),
    disabled: false,
    fillMode: "solid",
    format: "HH:mm",
    label: "Time Selection",
    max: new Date("23:59"),
    min: new Date("00:00"),
    name: "timepicker-input",
    nowButton: true,
    placeholder: "Select time",
    popup: CustomPopupComponent,
    required: true,
    rounded: "medium",
    show: true,
    size: "medium",
    smoothScroll: true,
    steps: { hour: 1, minute: 5 },
    tabIndex: 0,
    title: "TimePicker Title",
    valid: true,
    validationMessage: "Invalid time",
    validityStyles: true,
    value: new Date(),
    width: 200,
  };

  it("renders all props correctly", () => {
    render(<TimePicker {...props} />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<TimePicker {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
