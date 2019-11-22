import React from 'react';
import { Route } from 'react-router-dom';
import { LandingPage } from '../../../layouts';
export default function LandingRoute(props) {
	return <LandingPage render={<Route {...props} />} />;
}
