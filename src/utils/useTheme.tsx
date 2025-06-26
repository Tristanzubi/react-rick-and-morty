import { useContext } from "react";
import { ThemeContexte } from "../contexts/ThemeProvider";

function useTheme() {
	const context = useContext(ThemeContexte);

	if (!context) {
		throw new Error("This context cannot be null");
	}

	return context;
}

export default useTheme;
