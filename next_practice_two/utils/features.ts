export const getAllUser = async () => {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		return await res.json();
	} catch (error) {
		throw new Error("Something went wrong");
	}
};
