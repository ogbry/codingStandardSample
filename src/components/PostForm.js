import React, { useState } from 'react';
import { postData } from '../utils/api';

export default function PostForm() {
	let defaultState = {
		title: ''
	};

	const [ postDetails, setPostDetails ] = useState({ ...defaultState });
	const [ loadingDetails, setLoading ] = useState({ state: false, message: '' });
	function addToPosts(e) {
		e.preventDefault();
		setLoading({ ...loadingDetails, state: true, message: 'Adding post' });
		postData('/posts', { title: postDetails.title, completed: false })
			.then((result) => {
				setPostDetails({ ...defaultState });
				setLoading({ ...loadingDetails, state: false, message: '' });
				console.log(result);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}

	return (
		<div style={{ margin: 10 }}>
			{loadingDetails.state ? (
				<h2>
					Posting... <small>Please wait</small>
				</h2>
			) : (
				<h2>Post Form</h2>
			)}
			<form
				onSubmit={(e) => {
					addToPosts(e);
				}}
			>
				<input
					value={postDetails.title}
					required
					type="text"
					onChange={(e) => {
						setPostDetails({ ...postDetails, title: e.target.value });
					}}
					autoFocus
					placeholder="Title"
				/>
				<button type="submit">Post</button>
			</form>
		</div>
	);
}
