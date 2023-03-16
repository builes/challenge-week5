// This function receives a list of comments and a userId, then returns the corresponding comments to the user id
export const commentsFilter = (comments, gameId) => {
	return comments.filter((comment) => {
		return comment.gameId === Number(gameId);
	});
};
