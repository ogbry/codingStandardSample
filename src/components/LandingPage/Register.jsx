import React, { useState } from 'react';
import { TextField, Grid, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { postData } from '../../utils/api';
export default function SignIn(props) {
	const initialState = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const [ Input, setInput ] = useState(initialState);
	const [ Loading, setLoading ] = useState(false);
	function addUser() {
		setLoading(true);

		postData('/users', { name: 'asdasd' })
			.then((result) => {
				console.log(result);
				setLoading(false);
				console.log(props);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}
	console.log('Reg', props);
	return (
		<React.Fragment>
			<Paper className="paper">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						addUser();
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
							<TextField
								label="Username"
								fullWidth
								required
								type="text"
								onChange={(e) => {
									setInput({ ...Input, username: e.target.value });
								}}
							/>
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField
								label="Email"
								fullWidth
								required
								onChange={(e) => {
									setInput({ ...Input, email: e.target.value });
								}}
							/>
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField
								label="Password"
								fullWidth
								type="password"
								required
								onChange={(e) => {
									setInput({ ...Input, password: e.target.value });
								}}
							/>
						</Grid>
						<Grid item xs={12} className="grid-padding">
							<TextField
								label="Confirm Password"
								fullWidth
								type="password"
								required
								onChange={(e) => {
									setInput({ ...Input, confirmPassword: e.target.value });
								}}
							/>
						</Grid>

						<Grid item xs={6} className="grid-padding">
							<Button type="submit">Register</Button>
							<Link to="/" className="link">
								<Button type="button">Sign in</Button>
							</Link>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</React.Fragment>
	);
}
