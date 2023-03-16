import React, { useRef, useState } from 'react';
import './gameinformation.scss';

const GLITCH_URL = 'https://busy-glory-snail.glitch.me/comments/';

export const GameInformation = ({ data, userId, isLogged, setreRender }) => {
	const [isComment, setIsComment] = useState(false);
	const [comment, setComment] = useState('');

	const {
		id: gameId,
		background_image: urlImage,
		description_raw: description,
		name,
		rating,
		website,
		released,
	} = !!data && data;

	const textAreaRef = useRef();

	const onButtonComment = () => {
		if (isLogged) {
			setIsComment(!isComment);
			isComment && textAreaRef.current?.focus();
		} else {
			alert('You must  be logged to make a comment');
		}
	};

	const onComment = async ({ target }) => {
		setComment(target.value);
	};

	const onSendComment = async () => {
		const postData = {
			userId,
			gameId,
			comment,
		};
		if (comment.trim().length > 5) {
			const res = await fetch(GLITCH_URL, {
				method: 'POST',
				body: JSON.stringify(postData),
				headers: { 'Content-type': 'application/json; charset=UTF-8' },
			});

			if (res.status === 201) {
				setIsComment(false);
				alert('comment made successfully');
				setreRender((value) => !value);
			}
		} else {
			alert('Comment must be longer than five characters');
		}
	};

	return (
		<div className='game-container'>
			<img src={urlImage} alt={name} />
			<div className='game-header'>
				<h3>{name}</h3>
				<small className='game-rating'>{rating}/5</small>
			</div>
			<h4>Description:</h4>
			<p className='game-description'>{description}</p>
			<div className='game-footer'>
				<time>Relaesed: {released}</time>
				<a href={website} target='_blank'>
					Website
				</a>
			</div>
			<button className='game-button' onClick={onButtonComment}>
				{!isComment ? 'Make a Comment' : 'Hide Comment'}
			</button>

			<div className={!isComment ? 'hide' : ''}>
				<textarea
					ref={textAreaRef}
					className='game-comment'
					onChange={onComment}
					placeholder='Write a comment'
				></textarea>
				<button onClick={onSendComment}>Send Comment</button>
			</div>
		</div>
	);
};
