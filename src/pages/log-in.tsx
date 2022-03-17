import { useMutation } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormPage, Input } from '../components';
import { LOG_IN } from '../graphql';
import { setToken, useAppSelector } from '../store';

interface FormValues {
	email: string;
	password: string;
}

export default function LogIn() {
	const loggedIn = useAppSelector(state => state.auth);
	const dispatch = useDispatch();
	const formProps = useForm<FormValues>();
	const router = useRouter();

	const [logIn, { loading }] = useMutation(LOG_IN);

	const handleSubmit = async (values: FormValues) => {
		if (loading) return;

		try {
			const res = await logIn({ variables: values });
			dispatch(setToken(res.data.login.token));
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
				<title>Log In | Assignment</title>
			</Head>
			<FormPage formProps={formProps} onSubmit={handleSubmit}>
				<h1>Log in</h1>
				<Input defaultMargin name="email" placeholder="Email" required />
				<Input defaultMargin name="password" placeholder="Password" required type="password" />
			</FormPage>
		</>
	);
}
