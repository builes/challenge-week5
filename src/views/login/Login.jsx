import { useEffect } from 'react';
import { useFetchUser } from '../../utils/hooks/useFetchUser';
import { useForm } from '../../utils/hooks/useForm';
import './login.scss';

const BASE_URL = 'https://busy-glory-snail.glitch.me/users/1';

export const Login = ({ setViewState, setIsLogged }) => {
	const { username, password, onInputChange } = useForm({
		username: '',
		password: '',
	});

	const { data, isLoading } = useFetchUser(BASE_URL);

	const onLoginSubmit = (e) => {
		e.preventDefault();
		if (data?.username === username && data?.password === password) {
			localStorage.setItem('isLogged', true);
			localStorage.setItem('id', data.id);
			setViewState({
				isHomePage: true,
				isLogin: false,
				isGame: false,
				isGames: false,
			});
			setIsLogged(true);
		} else {
			localStorage.setItem('isLogged', false);
			localStorage.setItem('id', null);
			alert('Invalid credentials');
		}
	};

	return (
		<div className='form-container'>
			<form className='form'>
				<h1 className='form-title'>Login</h1>

				<input
					type='text'
					className='form-input'
					placeholder='username'
					name='username'
					value={username}
					onChange={onInputChange}
				/>

				<input
					type='password'
					className='form-input'
					placeholder='paswword'
					name='password'
					value={password}
					onChange={onInputChange}
				/>

				<button className='form-button' type='submit' onClick={onLoginSubmit}>
					Login
				</button>

				<small className='small-form'>
					Don't have an account?{' '}
					<b>
						<a href='#'>Sign up for free</a>
					</b>
				</small>
			</form>
		</div>
	);
};
