import { commentsFilter } from './commentsFilter';

// This function is called is the user isLogged, then brings the comments of all users and then makes a filter with the gameId
export const fetchComments = async (url, gameId) => {
	try {
		const query = `${url}/comments`;
		const res = await fetch(query);
		const comments = await res.json();

		const filteredComments = commentsFilter(comments, gameId);
		return filteredComments;
	} catch (error) {
		console.log(error);
	}
};
