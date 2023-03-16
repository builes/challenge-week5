import { useEffect, useState } from 'react';
import { fetchUserById } from '../../utils/helpers/fetchUserById';
import { GLITCH_URL } from '../../utils/constants.js';
import './comment.scss';

export const Comment = ({ userId, comment }) => {
	const [author, setAuthor] = useState('');

	useEffect(() => {
		const getUser = async () => {
			setAuthor(await fetchUserById(GLITCH_URL, userId));
		};
		getUser();
	}, []);

	return (
		<div className='comment-container'>
			<h3>Author: {author.username}</h3>
			<hr />
			<p>{comment}</p>
		</div>
	);
};
