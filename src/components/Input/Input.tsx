import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
	defaultMargin?: boolean;
	name: string;
}

export default function Input({ className, defaultMargin, name, ...props }: InputProps) {
	const { register } = useFormContext();

	return (
		<input
			{...props}
			{...register(name)}
			className={clsx(
				styles.input,
				defaultMargin && styles.input_defaultMargin,
				className
			)}
		/>
	);
}
