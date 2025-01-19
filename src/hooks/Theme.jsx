import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext();

const getTheme = () => {
	const theme = localStorage.getItem('theme');

	if(!theme) {
		localStorage.setItem('theme', 'dark');
		return 'dark';
	} else {
		return theme;
	}
}

const ThemeProvider = ({ children }) => {
	const [ theme, setTheme ] = useState(getTheme);

	const toggleTheme = () => {
		if(theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	}

	useEffect(() => {
		const refreshTheme = () => {
			localStorage.setItem('theme', theme);
			document.body.setAttribute('data-theme', theme);
		}

		refreshTheme();
	}, [theme]);


	return (
		<ThemeContext.Provider
			value={{
					theme,
					setTheme,
					toggleTheme
			}}
		>
			{ children }
		</ThemeContext.Provider>
	);
}   

export { ThemeContext, ThemeProvider };