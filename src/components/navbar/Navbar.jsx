import './navbar.scss';

export const Navbar = ({ setViewState, isLogged, setIsLogged }) => {
	const onHomePageButton = () => {
		setViewState({
			isHomePage: true,
			isLogin: false,
			isGame: false,
			isGames: false,
		});
	};

	const onGamesButton = () => {
		setViewState({
			isHomePage: false,
			isLogin: false,
			isGame: false,
			isGames: true,
		});
	};

	const onLoginButton = () => {
		setViewState({
			isHomePage: false,
			isLogin: true,
			isGame: false,
			isGames: false,
		});
	};

	const onLogoutButton = () => {
		setIsLogged(false);
		localStorage.setItem('isLogged', false);
		localStorage.removeItem('id');
		setViewState({
			isHomePage: true,
			isLogin: false,
			isGame: false,
			isGames: false,
		});
	};

	console.log(isLogged);

	return (
		<nav className='navbar'>
			<div className='left-side-navbar'>
				<button className='navbar-button' onClick={onHomePageButton}>
					HomePage
				</button>
				<button className='navbar-button' onClick={onGamesButton}>
					Games
				</button>
			</div>
			{!isLogged ? (
				<button className='navbar-button' onClick={onLoginButton}>
					Login
				</button>
			) : (
				<button className='navbar-button' onClick={onLogoutButton}>
					Logout
				</button>
			)}
		</nav>
	);
};
