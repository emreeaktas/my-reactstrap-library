import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox Component", () => {
  test("renders checkbox with label", () => {
    render(<Checkbox label="Test Label" id="test-checkbox" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("handles checked state change", () => {
    const handleChange = jest.fn();
    render(<Checkbox id="test-checkbox" onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("respects disabled prop", () => {
    render(<Checkbox id="test-checkbox" disabled={true} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  test("shows validation message when invalid", () => {
    render(
      <Checkbox
        label="Test Checkbox"
        valid={false}
        validationMessage="This field is required"
        validityStyles={true}
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  test("applies the correct validation styles", () => {
    const { rerender } = render(
      <Checkbox label="Test Checkbox" valid={true} validityStyles={true} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("is-valid");

    rerender(
      <Checkbox label="Test Checkbox" valid={false} validityStyles={true} />
    );

    expect(checkbox).toHaveClass("is-invalid");
  });

  test("applies default checked state", () => {
    render(<Checkbox defaultChecked={true} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });
});
