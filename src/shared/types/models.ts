export interface Post {
	description: string;
	id: string;
	postedBy: User;
	url: string;
	votes: {
		id: string;
		user: User;
	}[];
}

interface User {
	id: string;
	name: string;
}
