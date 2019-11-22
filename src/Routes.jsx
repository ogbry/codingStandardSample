import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { SignIn, Register } from './components/LandingPage';
import { LandingRoute, MainRoute } from './components/Auth';
import { HomePage } from './components/HomePage';
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<LandingRoute exact path="/" render={<SignIn />} />
				<LandingRoute exact path="/register" render={<Register />} />
				<MainRoute exact path="/home" render={<HomePage />} />
			</Switch>
		</BrowserRouter>
	);
}
