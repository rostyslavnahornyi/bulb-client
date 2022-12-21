import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant:
    | 'filledPurple'
    | 'filledRed'
    | 'filledGray'
    | 'outlineRed'
    | 'outlineGreen'
  size: 'large' | 'small';
  text?: string;
}

export type { ButtonProps };
