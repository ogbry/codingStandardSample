import React from 'react';

import './LandingPage.css';
import { Grid, Paper } from '@material-ui/core';
export default function LandingPage(props) {
	return (
		<Grid container className="landing-wrapper">
			<Grid item lg={3} md={10} sm={12} className="sign-in-container">
				{props.component}
			</Grid>
		</Grid>
	);
}
