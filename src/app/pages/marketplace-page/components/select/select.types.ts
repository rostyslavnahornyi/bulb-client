import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SelectProps {
  readonly label?: string;
  readonly defaultValue: string;
  readonly options: ReadonlyArray<OptionProps>;
  readonly onSelect: (option: string) => void;
}

interface OptionProps {
  readonly label: string;
  readonly value: string;
}

export type { SelectProps };
