import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { SignIn, Register } from './components/LandingPage';
import { LandingRoute, MainRoute } from './components/Auth';
import { HomePage } from './components/HomePage';
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<LandingRoute
					exact
					path="/"
					component={(props) => {
						return <SignIn {...props} />;
					}}
				/>
				<LandingRoute
					exact
					path="/register"
					component={(props) => {
						return <Register {...props} />;
					}}
				/>
				<MainRoute
					exact
					path="/home"
					component={(props) => {
						return <HomePage {...props} />;
					}}
				/>
			</Switch>
		</BrowserRouter>
	);
}
