import { Meta } from "@storybook/react";
import { TimePickerProps } from "./TimePickerProps";
import TimePicker from "./TimePicker";

export default {
  title: "Design System/Date Inputs/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          'The KendoReact TimePicker represents a time-list where the user can enter or pick time values. \n\n```javascript\nimport { TimePicker } from "@my-ui-library"\n```',
      },
    },
  },
  argTypes: {
    dataTestId: {
      control: { type: "text" },
      description: "Specifies the data-test-id attribute for testing purposes.",
    },
    adaptive: {
      control: { type: "boolean" },
      description:
        "Providing different rendering of the popup element based on the screen dimensions.",
    },
    adaptiveTitle: {
      control: { type: "text" },
      description:
        "Specifies the text that is rendered as title in the adaptive popup.",
    },
    ariaDescribedBy: {
      control: { type: "text" },
      description:
        "Identifies the element(s) which will describe the component, similar to HTML aria-describedby attribute.",
    },
    ariaLabelledBy: {
      control: { type: "text" },
      description: "Identifies the element(s) which will label the component.",
    },
    cancelButton: {
      control: { type: "boolean" },
      description:
        "Determines whether to display the Cancel button in the popup.",
    },
    className: {
      control: { type: "text" },
      description: "Sets the className of the TimePicker.",
    },
    dateInput: {
      control: { type: "object" },
      description:
        "Enables the customization or the override of the default DateInput which is rendered by the TimePicker.",
    },
    defaultShow: {
      control: { type: "boolean" },
      description: "Sets the default state of the popup upon render.",
    },
    defaultValue: {
      control: { type: "date" },
      description: "Sets the default value of the TimePicker.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Determines whether the TimePicker is disabled.",
    },
    fillMode: {
      control: {
        type: "select",
        options: ["null", "flat", "outline", "solid"],
      },
      description: "Configures the fillMode of the TimePicker.",
    },
    format: {
      control: { type: "text" },
      description:
        "Specifies the date format that is used to display the input value.",
    },
    formatPlaceholder: {
      control: { type: "object" },
      description:
        "Defines the descriptions of the format sections in the input field.",
    },
    id: {
      control: { type: "text" },
      description: "Specifies the id of the TimePicker.",
    },
    label: {
      control: { type: "text" },
      description: "Renders a floating label for the TimePicker.",
    },
    max: {
      control: { type: "date" },
      description: "Specifies the greatest valid time.",
    },
    min: {
      control: { type: "date" },
      description: "Specifies the smallest valid time.",
    },
    name: {
      control: { type: "text" },
      description: "Specifies the name property of the input DOM element.",
    },
    nowButton: {
      control: { type: "boolean" },
      description: "Determines whether to display the Now button in the popup.",
    },
    placeholder: {
      control: { type: "text" },
      description:
        "Specifies the hint the DateInput displays when its value is null or there is no partial selection.",
    },
    popup: {
      control: { type: "object" },
      description:
        "Enables the customization or the override of the default Popup which is rendered by the TimePicker.",
    },
    popupSettings: {
      control: { type: "object" },
      description: "Configures the popup options of the TimePicker.",
    },
    required: {
      control: { type: "boolean" },
      description: "Specifies if null is a valid value for the component.",
    },
    rounded: {
      control: {
        type: "select",
        options: ["null", "small", "medium", "full", "large"],
      },
      description: "Configures the roundness of the TimePicker.",
    },
    show: {
      control: { type: "boolean" },
      description: "Specifies if a time selector will be displayed.",
    },
    size: {
      control: {
        type: "select",
        options: ["null", "small", "medium", "large"],
      },
      description: "Configures the size of the TimePicker.",
    },
    smoothScroll: {
      control: { type: "boolean" },
      description: "Toggles the smooth scroll animation on time click.",
    },
    steps: {
      control: { type: "object" },
      description: "Configures the incremental steps of the TimePicker.",
    },
    tabIndex: {
      control: { type: "number" },
      description: "Sets the tabIndex property of the TimePicker.",
    },
    title: {
      control: { type: "text" },
      description: "Sets the title of the input element of the TimePicker.",
    },
    valid: {
      control: { type: "boolean" },
      description: "Overrides the validity state of the component.",
    },
    validationMessage: {
      control: { type: "text" },
      description: "Controls the form error message of the component.",
    },
    validityStyles: {
      control: { type: "boolean" },
      description:
        "If set to false, no visual representation of the invalid state of the component will be applied.",
    },
    value: {
      control: { type: "date" },
      description: "Specifies the value of the TimePicker.",
    },
    width: {
      control: { type: "text" },
      description: "Specifies the width of the TimePicker.",
    },
    onBlur: {
      action: "onBlur",
      description:
        "Fires each time any of the TimePicker elements gets blurred.",
    },
    onChange: {
      action: "onChange",
      description: "Fires each time the user selects a new value.",
    },
    onClose: {
      action: "onClose",
      description: "Fires each time the popup is closed.",
    },
    onFocus: {
      action: "onFocus",
      description:
        "Fires each time the user focuses any of the TimePicker elements.",
    },
    onOpen: {
      action: "onOpen",
      description: "Fires each time the popup is opened.",
    },
  },
} as Meta;

export const Default = (args: TimePickerProps): JSX.Element => (
  <TimePicker {...args} />
);

Default.args = {
  dataTestId: "time-picker-data-testid",
  adaptive: true,
  cancelButton: true,
  disabled: false,
  format: "HH:mm",
  label: "Zaman",
  width: "300px",
};
