import React from 'react';
import { TextField, Grid, Paper, Button } from '@material-ui/core';
export default function SignIn() {
	return (
		<React.Fragment>
			<Paper style={{ padding: 15, paddingBottom: 25 }}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						alert('form submit');
					}}
				>
					<Grid container>
						<Grid item xs={12} className="grid-padding">
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<img
									src="https://forum.imasters.com.br/uploads/monthly_2017_03/logo.png.83045f3341452136ad36fc9a376670c7.png"
									width={200}
								/>
							</div>
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField label="Username" fullWidth />
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField label="Password" fullWidth />
						</Grid>
						<Grid item xs={6} className="grid-padding">
							<Button type="submit">Login</Button>
							<Button type="button">Register</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</React.Fragment>
	);
}
