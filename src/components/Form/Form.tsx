import clsx from 'clsx';
import { FormHTMLAttributes } from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import styles from './Form.module.scss';

export interface FormProps<T> extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	formProps: UseFormReturn<T>;
	onSubmit: SubmitHandler<T>;
}

export default function Form<T>({ children, className, formProps, onSubmit, ...props }: FormProps<T>) {
	const { handleSubmit } = formProps;

	return (
		<form
			{...props}
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormProvider {...formProps}>
				{children}
			</FormProvider>
		</form>
	);
}
