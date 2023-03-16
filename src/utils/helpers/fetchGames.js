// This function takes 3 parameters, the first parameter is the url where it will make the request, the second parameter is the page, the third parameter is how many results we want per page, and the four parameter is the api key.
export const fetchGames = async (url, page, pageSize, apiKey) => {
	try {
		const query = `${url}?page=${page}&page_size=${pageSize}&key=${apiKey}`;
		const res = await fetch(query);

		const games = await res.json();
		console.log(games.results);
		return games.results;
	} catch (error) {
		console.log(error);
	}
};
