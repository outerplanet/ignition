import Head from 'next/head';
import { PageWidth, Post } from '../components';
import { client, GET_LINKS } from '../graphql';
import { Post as PostModel } from '../shared/types';

interface IndexProps {
	feed: {
		count: number;
		links: PostModel[];
	};
}

export default function Index({ feed }: IndexProps) {
	return (
		<>
			<Head>
				<title>Assignment</title>
			</Head>
			<PageWidth>
				{feed.links.map(v => <Post {...v} key={v.id} />)}
			</PageWidth>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({ query: GET_LINKS });

	return {
		props: {
			feed: data.feed
		},
		revalidate: 60
	};
}
