import React from "react";
import { getAllUser } from "../../utils/features";

const Home = async () => {
	const user = await getAllUser();
	console.log(user);

	return (
		<div>
			<h1>Hello world</h1>
		</div>
	);
};

export default Home;

// using client component into server as a recular component
// but while using server component into client we have to pass it through the children prop
