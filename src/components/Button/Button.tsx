import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	background?: boolean;
}

export default function Button({ background, className, type = 'button', ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				styles.button,
				background && styles.button_background,
				className
			)}
			type={type}
		/>
	);
}
