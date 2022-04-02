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

	// 3. Cleanup function luon dc goi truoc khi callback dc goi(tru lan mounted)

	// Note: Khi thay component co the bi unmounted bang bat ki truong hop nao, ma o trong component do co sd setInterval, setTimeout, async, listener event, subcribe event thi luon nho dung clean up function de tranh ro ri bo nho

	const [count, setCount] = useState(1);

	useEffect(() => {
		console.log("Mounted or Re-render");

		return () => console.log("Clean up");
	}, [count]);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
