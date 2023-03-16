// This function bring a game by id
export const fetchGameById = async (url, id, apiKey) => {
	try {
		const query = `${url}/${id}?key=${apiKey}`;
		const res = await fetch(query);

		const game = await res.json();
		return game;
	} catch (error) {
		console.log(error);
	}
};
