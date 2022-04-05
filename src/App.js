import React, { useCallback, useState } from "react";
import Content from "./Content";
// import Content from "./Content";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props

// Can dung memo thi moi dung useCallback

function App() {
	const [count, setCount] = useState(0);

	const increase = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	return (
		<div style={{ padding: "10px 32px" }}>
			<Content onIncrease={increase} />
			<h1>{count}</h1>
		</div>
	);
}

export default App;
