import { useEffect, useState } from 'react';
import { fetchGames } from '../../utils/helpers/fetchGames';
import { Search } from '../../components/search/Search.jsx';
import { URL_BASE, API_KEY } from '../../utils/constants.js';
import { GameCard } from '../../components/gameCard/GameCard';
import './games.scss';

export const Games = ({ setViewState }) => {
	const [games, setGames] = useState({ data: [], isLoading: true });

	// useEffect(() => {
	// 	const getGames = async () => {
	// 		const games = await fetchGames(URL_BASE, 1, 4, API_KEY);
	// 		setGames({ data: games, isLoading: false });
	// 	};
	// 	getGames();
	// }, []);

	const { data, isLoading } = games;

	return (
		<div className='cards-container'>
			<Search setGames={setGames} />
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				data.map((game) => (
					<GameCard key={game.id} {...game} setViewState={setViewState} />
				))
			)}
		</div>
	);
};
