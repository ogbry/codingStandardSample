import React from 'react';

import { Link } from 'react-router-dom';
export default function MainNavigation() {
	return (
		<ul>
			<Link to="/home">
				<li>Dashboard</li>
			</Link>
			<Link to="/">
				<li>logout</li>
			</Link>
		</ul>
	);
}
