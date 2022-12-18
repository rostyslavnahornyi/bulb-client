import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react';

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
	readonly onChange: (value: string) => void;
}

export type { InputProps };
