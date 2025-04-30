import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../Input";

describe("Input Component", () => {
  test("renders input with label", () => {
    render(<Input label="Test Label" id="test-input" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  test("handles value changes", () => {
    const handleChange = jest.fn();
    render(<Input id="test-input" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("shows validation message when invalid", () => {
    render(
      <Input
        label="Test Input"
        valid={false}
        validationMessage="This field is required"
        validityStyles={true}
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  test("applies the correct validation styles", () => {
    const { rerender } = render(
      <Input label="Test Input" valid={true} validityStyles={true} />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("is-valid");

    rerender(<Input label="Test Input" valid={false} validityStyles={true} />);

    expect(input).toHaveClass("is-invalid");
  });

  test("applies custom style", () => {
    const customStyle = { width: "300px", marginTop: "10px" };
    render(<Input style={customStyle} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle("width: 300px");
    expect(input).toHaveStyle("margin-top: 10px");
  });
});
