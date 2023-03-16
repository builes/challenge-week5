import { Login } from './views/login/Login';
import { HomePage } from './views/homepage/HomePage';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Games } from './views/games/Games';
import { useEffect, useState } from 'react';
import { Game } from './views/game/Game';
import { Icon } from './components/icon/Icon';

export const App = () => {
	const [viewState, setViewState] = useState({
		isHomePage: true,
		isLogin: false,
		isGame: false,
		isGames: false,
	});

	const [isLogged, setIsLogged] = useState();

	useEffect(() => {
		setIsLogged(localStorage.getItem('isLogged'));
	}, []);

	const { isHomePage, isLogin, isGame, isGames } = viewState;

	return (
		<div>
			<Navbar
				setViewState={setViewState}
				isLogged={isLogged}
				setIsLogged={setIsLogged}
			/>

			{isHomePage && <HomePage setViewState={setViewState} />}

			{isLogin && (
				<Login setViewState={setViewState} setIsLogged={setIsLogged} />
			)}

			{isGame && (
				<Game
					setViewState={setViewState}
					viewState={viewState}
					isLogged={isLogged}
				/>
			)}

			{isGames && <Games setViewState={setViewState} />}

			<Footer />
		</div>
	);
};
