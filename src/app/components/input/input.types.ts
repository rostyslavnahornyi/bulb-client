import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  readonly onChange: (value: string) => void;
  readonly label?: string;
  readonly iconLabel?: ReactNode;
  readonly tailingLabel?: string;
  readonly tailingIcon?: ReactNode;
  readonly innerLabel?: string;
  variant: 'dark' | 'light';
}

export type { InputProps };
