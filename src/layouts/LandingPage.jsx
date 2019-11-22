import React from 'react';

import './LandingPage.css';
import { Grid } from '@material-ui/core';
export default function LandingPage(props) {
	return (
		<Grid container className="landing-wrapper">
			<Grid item lg={3} md={5} sm={10} xs={10} className="sign-in-container">
				{props.render}
			</Grid>
		</Grid>
	);
}
