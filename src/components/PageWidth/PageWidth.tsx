import { PropsWithChildren } from 'react';
import styles from './PageWidth.module.scss';

export default function PageWidth({ children }: PropsWithChildren<{}>) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}
