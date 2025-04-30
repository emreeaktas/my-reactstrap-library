import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NumericTextBox from "../NumericTextBox";

describe("NumericTextBox Component", () => {
  test("renders with label", () => {
    render(<NumericTextBox id="test-numeric" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  test("handles value changes", () => {
    const handleChange = jest.fn();
    render(<NumericTextBox id="test-numeric" onChange={handleChange} />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "42" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe(42);
  });

  test("respects min and max constraints", () => {
    render(<NumericTextBox id="test-numeric" min={0} max={100} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("min", "0");
    expect(input).toHaveAttribute("max", "100");
  });

  test("respects step attribute", () => {
    render(<NumericTextBox id="test-numeric" step={0.5} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("step", "0.5");
  });

  test("shows validation message when invalid", () => {
    render(<NumericTextBox valid={false} validityStyles={true} />);

    expect(screen.getByText("Value is out of range")).toBeInTheDocument();
  });

  test("applies the correct validation styles", () => {
    const { rerender } = render(
      <NumericTextBox valid={true} validityStyles={true} />
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("is-valid");

    rerender(<NumericTextBox valid={false} validityStyles={true} />);

    expect(input).toHaveClass("is-invalid");
  });

  test("respects disabled prop", () => {
    render(<NumericTextBox id="test-numeric" disabled={true} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toBeDisabled();
  });
});
