import { PropsWithChildren } from 'react';
import { Button } from '../Button';
import { Form, FormProps } from '../Form';
import { PageWidth } from '../PageWidth';
import styles from './FormPage.module.scss';

export default function FormPage<T>({ children, ...props }: PropsWithChildren<Pick<FormProps<T>, 'formProps' | 'onSubmit'>>) {
	return (
		<PageWidth>
			<div className={styles.container}>
				<Form {...props}>
					{children}
					<Button background className={styles.submit} type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</PageWidth>
	);
}
