import { useMemo } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { pluralize } from '../../shared/functions';
import { Post as PostModel } from '../../shared/types';
import { Button } from '../Button';
import styles from './Post.module.scss';

export default function Post({ description, url, votes }: PostModel) {
	const visibleVotes = useMemo(() => {
		const newVotes = [...votes];
		newVotes.length = 8;

		return newVotes;
	}, [votes]);

	return (
		<article className={styles.container}>
			<a href={'//' + url} rel="noreferrer" target="_blank">{description}</a>
			<div className={styles.footer}>
				<Button className={styles.footer_upvoteButton}>
					<FaArrowUp />
				</Button>
				<div className={styles.footer_upvotesContainer}>
					<div className={styles.footer_upvotes}>
						{visibleVotes.map(vote => (
							<p key={vote.id} className={styles.footer_upvotes_item}>
								{vote.user.name[0]}
							</p>
						))}
					</div>
					<p className={styles.footer_upvotesText}>
						{votes.length
							? `${votes.length} ${pluralize(votes.length, 'upvote')}`
							: 'No upvotes'}
					</p>
				</div>
			</div>
		</article>
	);
}
