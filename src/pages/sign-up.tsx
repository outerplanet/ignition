import { useMutation } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormPage, Input } from '../components';
import { SIGN_UP } from '../graphql';
import { setToken, useAppSelector } from '../store';

interface FormValues {
	email: string;
	name: string;
	password: string;
}

export default function SignUp() {
	const loggedIn = useAppSelector(state => state.auth);
	const dispatch = useDispatch();
	const formProps = useForm<FormValues>();
	const router = useRouter();

	const [signUp, { loading }] = useMutation(SIGN_UP);

	const handleSubmit = async (values: FormValues) => {
		if (loading) return;

		try {
			const res = await signUp({ variables: values });
			dispatch(setToken(res.data.signup.token));
			router.push('/');
		}
		catch (err) {
			// eslint-disable-next-line no-alert
			alert(err);
		}
	};

	if (loggedIn) {
		router.replace('/');
	}

	return (
		<>
			<Head>
				<title>Sign Up | Assignment</title>
			</Head>
			<FormPage formProps={formProps} onSubmit={handleSubmit}>
				<h1>Sign up</h1>
				<Input defaultMargin name="email" placeholder="Email" required />
				<Input defaultMargin name="name" placeholder="Name" required />
				<Input
					autoComplete="new-password"
					defaultMargin
					name="password"
					placeholder="Password"
					required
					type="password"
				/>
			</FormPage>
		</>
	);
}
