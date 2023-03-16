import { useState } from 'react';

export const useForm = (initialForm) => {
	// Initial form is an object sent since the form with the field of the form
	const [formState, setformState] = useState(initialForm);

	// Event that is executed when change any value in the form
	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setformState({ ...formState, [name]: value });
	};

	// this customHook returns the state of the form and a funcion that handle te onchange event
	return { ...formState, onInputChange };
};
