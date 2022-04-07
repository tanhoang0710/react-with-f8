import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("dark");

	const toggleThemeHandler = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const value = {
		theme,
		toggleThemeHandler,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };
