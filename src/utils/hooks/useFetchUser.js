import { useEffect, useState } from 'react';

export const useFetchUser = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
	});

	useEffect(() => {
		const getFetch = async () => {
			setState({ ...state, isLoading: true });

			const res = await fetch(url);
			const data = await res.json();

			setState({ data, isLoading: false });
		};

		getFetch();
	}, [url]);

	return state;
};
