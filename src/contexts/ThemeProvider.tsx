import { createContext, useState } from "react";
import type { Children, ThemeProps } from "../types/context";

export const ThemeContexte = createContext<ThemeProps | null>(null);

export default function ThemeProvider({ children }: Children) {
	const [theme, setTheme] = useState(false);

	return (
		<ThemeContexte.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContexte.Provider>
	);
}
