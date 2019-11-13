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
			<h3 style={{ textAlign: 'center' }}>News Feed</h3>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<ul>
					{getAllPost.map((post) => (
						<Li key={post.id}>
							<b>{post.title} </b>- <small> {post.completed ? 'Complete' : 'Incomplete'}</small>
							<p>Lorem sadifopsdfklsdajf sdkfjksldfj sdjfklsda jfklsadj</p>
						</Li>
					))}
				</ul>
			</div>
		</div>
	);
}
