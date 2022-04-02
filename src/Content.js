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
	// 2. Clean up function luon dc goi truoc khi component duoc unmounted

	const [title, setTitle] = useState("");
	const [posts, setPosts] = useState([]);
	const [type, setType] = useState("posts");
	const [showGoToTop, setShowGoToTop] = useState(false);

	useEffect(() => {
		console.log("title change");
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [type]);

	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY >= 200) {
				setShowGoToTop(true);
			} else {
				setShowGoToTop(false);
			}

			// setShowGoToTop(window.scrollY >= 20 0);
		};

		window.addEventListener("scroll", scrollHandler);

		// cleanup function, don dep bo nho khi component unmounted
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

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
			{showGoToTop && (
				<button
					style={{
						position: "fixed",
						bottom: 20,
						right: 20,
					}}
				>
					Go to top
				</button>
			)}
		</div>
	);
}
