import Content from "./Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

export default function App() {
	const context = useContext(ThemeContext);

	return (
		<div style={{ padding: 20 }}>
			<button onClick={context.toggleThemeHandler}>Toggle theme</button>
			<Content />
		</div>
	);
}
