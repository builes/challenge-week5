import { useEffect, useState } from 'react';
import { fetchGameById } from '../../utils/helpers/fetchGameById';
import { URL_BASE, API_KEY, GLITCH_URL } from '../../utils/constants.js';
import './game.scss';
import { fetchComments } from '../../utils/helpers/fetchComments';
import { GameInformation } from '../../components/gameInformation/GameInformation';
import { Comment } from '../../components/comment/Comment';

export const Game = ({ viewState: { id: gameId }, isLogged }) => {
	const [game, setGame] = useState({ data: null, isLoading: true });
	const [comments, setcomments] = useState([]);
	const [userId, setUserId] = useState();
	const [reRender, setreRender] = useState(false);

	const { data, isLoading } = game;

	useEffect(() => {
		const getGame = async () => {
			const game = await fetchGameById(URL_BASE, gameId, API_KEY);
			setGame({ data: game, isLoading: false });
		};
		getGame();
	}, []);

	useEffect(() => {
		const userId = isLogged && Number(localStorage.getItem('id'));
		const getComments = async () => {
			setcomments(await fetchComments(GLITCH_URL, gameId));
			setUserId(userId);
		};
		getComments();
	}, [reRender]);
	return (
		<>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<GameInformation
					data={data}
					userId={userId}
					isLogged={isLogged}
					setreRender={setreRender}
				/>
			)}

			{comments.length && isLoading === 0 ? (
				<h2>No comments yet</h2>
			) : (
				<div className='comments-container'>
					<h2 className='comments-title'>Comments:</h2>
					{comments.map((comment) => (
						<Comment key={comment.id} {...comment} />
					))}
				</div>
			)}
		</>
	);
};
