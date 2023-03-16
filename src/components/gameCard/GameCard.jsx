import { Icon } from '../icon/Icon';
import { fetchGameById } from '../../utils/helpers/fetchGameById';
import './gamecard.scss';
import { useState } from 'react';

export const GameCard = ({
	id,
	background_image: urlImage,
	name,
	rating,
	parent_platforms: platforms = [],
	setViewState,
}) => {
	const onClickCard = () => {
		setViewState({
			isHomePage: false,
			isLogin: false,
			isGame: true,
			isGames: false,
			id,
		});
	};

	return (
		<div className='card-container' onClick={onClickCard}>
			<img src={urlImage} />
			<div className='card-body'>
				<div className='card-header'>
					<h3 className='card-name'>{name}</h3>
					<small className='card-rating'>{rating} /5</small>
				</div>

				{platforms.map(({ platform }) => (
					<Icon key={platform.id} nameIcon={platform.name} />
				))}
			</div>
		</div>
	);
};
