import React, { useEffect, useState } from "react";

//Side effect

const tabs = ["posts", "comments", "albums"];

export default function Content() {
	// 1. useEffect(callback)
	//  - Goi callback moi khi component re-render
	//  - Goi callback sau khi component them vao dom
	// 2. useEffect(callback, [])
	//  - Chi goi callback 1 lan sau khi component mounted
	// 3. useEffect(callback, [deps])
	//  - callback se duoc goi lai moi khi deps thay doi
	//
	// --------------------------------
	// 1. Callback luon dc goi sau khi component mounted

	const [title, setTitle] = useState("");
	const [posts, setPosts] = useState([]);
	const [type, setType] = useState("posts");

	useEffect(() => {
		console.log("title change");
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [type]);

	return (
		<div>
			{tabs.map((tab) => (
				<button
					onClick={() => setType(tab)}
					key={tab}
					style={
						type === tab
							? {
									color: "#fff",
									backgroundColor: "#333",
							  }
							: {}
					}
				>
					{tab}
				</button>
			))}

			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title || post.name}</li>
				))}
			</ul>
		</div>
	);
}
