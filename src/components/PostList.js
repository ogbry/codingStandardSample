import React, { useState, useEffect } from 'react';
import { getData } from '../utils/api';
import { Li } from './PostListStyles';

export default function PostList() {
	const [ getAllPost, setGetAllPost ] = useState([]);
	useEffect(() => {
		getData('/posts').then((result) => {
			setGetAllPost(result.data);
		});
	});

	return (
		<div>
			<h5>Post list</h5>
			<ul style={{ maxHeight: 600, overflow: 'auto', width: 500 }}>
				{getAllPost.map((post) => (
					<Li key={post.id}>
						{post.title} - <small> {post.completed ? 'Complete' : 'Incomplete'}</small>
					</Li>
				))}
			</ul>
		</div>
	);
}
