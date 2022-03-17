import { gql } from '@apollo/client';

export const LOG_IN = gql`
	mutation($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

export const SIGN_UP = gql`
	mutation($name: String!, $email: String!, $password: String!) {
		signup(name: $name, email: $email, password: $password) {
			token
		}
	}
`;
