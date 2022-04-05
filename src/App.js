import React, { useMemo, useRef, useState } from "react";

// useCallback dung khi trueyn ham hoac object xuong component con va su dung voi React.memo

// useMemo dung de ko bi tinh lai logic nao do nhieu lan: vd tinh total o duoi

function App() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [products, setProducts] = useState([]);

	const nameRef = useRef();

	const submitHandler = () => {
		setProducts([
			...products,
			{
				name,
				price: +price,
			},
		]);
		setName("");
		setPrice("");
		nameRef.current.focus();
	};

	const total = useMemo(() => {
		const result = products.reduce((res, prod) => res + prod.price, 0);
		return result;
	}, [products]);

	return (
		<div style={{ padding: "10px 32px" }}>
			<input
				type="text"
				value={name}
				placeholder="Enter name..."
				onChange={(e) => setName(e.target.value)}
				ref={nameRef}
			/>
			<br />
			<input
				type="text"
				value={price}
				placeholder="Enter price..."
				onChange={(e) => setPrice(e.target.value)}
			/>
			<br />
			<button onClick={submitHandler}>Add</button>
			<br />
			Total: {total}
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						{product.name} - {product.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
