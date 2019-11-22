import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from '../../../layouts';
export default function LandingRoute(props) {
	return (
		<Route {...props}>
			<LandingPage render={props.render} />
		</Route>
	);
}
