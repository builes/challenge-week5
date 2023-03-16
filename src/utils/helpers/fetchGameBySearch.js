export const fetchGameBySearch = async (url, search, apiKey) => {
	try {
		const query = `${url}?search=${search}&key=${apiKey}`;
		console.log(query);
		const res = await fetch(query);
		const games = await res.json();
		console.log(games.results);
		return games.results;
	} catch (error) {
		console.log(error);
	}
};
