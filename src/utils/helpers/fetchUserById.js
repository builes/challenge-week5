export const fetchUserById = async (url, userId) => {
	try {
		const query = `${url}/users/${userId}`;
		const res = await fetch(query);

		const user = await res.json();
		return user;
	} catch (error) {
		console.log(error);
	}
};
