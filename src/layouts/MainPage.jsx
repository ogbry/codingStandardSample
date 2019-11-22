import React from 'react';
import { Grid } from '@material-ui/core';
import { MainNavigation } from '../components/Navigatons';
export default function MainPage(props) {
	return (
		<Grid container style={{ border: 'solid 1px' }}>
			<Grid item xs={12}>
				<MainNavigation />
			</Grid>
			<Grid item>{props.render}</Grid>
		</Grid>
	);
}
