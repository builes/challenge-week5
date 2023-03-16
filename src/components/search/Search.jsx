import { useEffect, useState } from 'react';
import { URL_BASE, API_KEY } from '../../utils/constants.js';
import { debounce } from '../../utils/helpers/debounce.js';
import { fetchGameBySearch } from '../../utils/helpers/fetchGameBySearch.js';
import './search.scss';

export const Search = ({ setGames }) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		const getGames = async () => {
			const games = await fetchGameBySearch(URL_BASE, search, API_KEY);
			console.log(search);
			setGames({ data: games, isLoading: false });
		};
		getGames();
	}, [search]);

	const onSubmitSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.query.value);
	};

	// const onSearchInput = debounce((e) => {
	// 	setSearch(e.target.value);
	// }, 2000);

	return (
		<form className='search-container' onSubmit={onSubmitSearch}>
			<input
				className='input-search'
				type='text'
				placeholder='Search'
				// onChange={onSearchInput}
				name='query'
			/>
			<input type='submit' className='btn-search' value={'Search'} />
		</form>
	);
};
