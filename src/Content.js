import { useEffect, useLayoutEffect, useState } from "react";

// useEffect
// 1. Cap nhat lai state
// 2. Cap nhat DOM (mutated)
// 3. Render lai UI
// 4. Goi cleanup neu deps thay doi
// 5. Goi useEffect callback

// useLayoutEffect
// 1. Cap nhat lai state
// 2. Cap nhat DOM (mutated)
// 3. Goi cleanup neu deps thay doi (sync)
// 4. Goi useLayoutEffect callback(sync)
// 5. Render lai UI
export default function Content() {
	const [count, setCount] = useState(0);

	useLayoutEffect(() => {
		if (count > 3) setCount(0);
	}, [count]);

	const handleRun = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleRun}>Run</button>
		</div>
	);
}
