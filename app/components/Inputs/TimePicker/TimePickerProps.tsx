import {
  TimePickerChangeEvent as KendoTimePickerChangeEvent,
  TimePickerCloseEvent as KendoTimePickerCloseEvent,
  TimePickerOpenEvent as KendoTimePickerOpenEvent,
} from "@progress/kendo-react-dateinputs";

export interface DateInputFormatPlaceholder {
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
}

export interface DateFormatOptions {
  skeleton?: string;
  pattern?: string;
  date?: "short" | "medium" | "long" | "full";
  time?: "short" | "medium" | "long" | "full";
  datetime?: "short" | "medium" | "long" | "full";
  era?: "narrow" | "short" | "long";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day?: "numeric" | "2-digit";
  weekday?: "narrow" | "short" | "long";
  hour?: "numeric" | "2-digit";
  hour12?: boolean;
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "short" | "long";
}

export interface DateInputsPopupSettings {
  animate?: boolean;
  appendTo?: HTMLElement;
  popupClass?: string;
}

export interface TimePickerIncrementalSteps {
  hour?: number;
  minute?: number;
  second?: number;
}

export interface TimePickerProps {
  dataTestId?: string;
  adaptive?: boolean;
  adaptiveTitle?: string;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  cancelButton?: boolean;
  className?: string;
  dateInput?: React.ComponentType<any>;
  defaultShow?: boolean;
  defaultValue?: null | Date;
  disabled?: boolean;
  fillMode?: null | "flat" | "outline" | "solid";
  format?: string | DateFormatOptions;
  formatPlaceholder?: DateInputFormatPlaceholder;
  id?: string;
  label?: string;
  max?: Date;
  min?: Date;
  name?: string;
  nowButton?: boolean;
  placeholder?: null | string;
  popup?: React.ComponentType<any>;
  popupSettings?: DateInputsPopupSettings;
  required?: boolean;
  rounded?: null | "small" | "medium" | "full" | "large";
  show?: boolean;
  size?: null | "small" | "medium" | "large";
  smoothScroll?: boolean;
  steps?: TimePickerIncrementalSteps;
  tabIndex?: number;
  title?: string;
  valid?: boolean;
  validationMessage?: string;
  validityStyles?: boolean;
  value?: null | Date;
  width?: string | number;
  onBlur?: (
    event: React.FocusEvent<HTMLSpanElement | HTMLDivElement | HTMLInputElement>
  ) => void;
  onChange?: (event: KendoTimePickerChangeEvent) => void;
  onClose?: (event: KendoTimePickerCloseEvent) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLSpanElement | HTMLDivElement | HTMLInputElement>
  ) => void;
  onOpen?: (event: KendoTimePickerOpenEvent) => void;
}
