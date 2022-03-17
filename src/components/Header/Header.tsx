import Link from 'next/link';
import { useAppSelector } from '../../store';
import { PageWidth } from '../PageWidth';
import styles from './Header.module.scss';

export default function Header() {
	const loggedIn = useAppSelector(state => state.auth);

	return (
		<header className={styles.header}>
			<PageWidth>
				<div className={styles.wrapper}>
					<Link href="/">
						<a className={styles.logo}>Assignment</a>
					</Link>
					{!loggedIn && (
						<nav className={styles.nav}>
							<Link href="/log-in">Log in</Link>
							<Link href="/sign-up">Sign up</Link>
						</nav>
					)}
				</div>
			</PageWidth>
		</header>
	);
}
