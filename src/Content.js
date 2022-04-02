import React, { useEffect, useState } from "react";

//Side effect

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

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeHandler = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	return (
		<div>
			<h1>{width}</h1>
		</div>
	);
}
