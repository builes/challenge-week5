export const debounce = (fn, delay) => {
	let timeoutId;

	return function (...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		// fntion will be executed just once
		timeoutId = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};
