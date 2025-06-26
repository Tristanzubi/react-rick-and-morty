import "../../styles/ToggleTheme.css";
import useTheme from "../../utils/useTheme";

function ToggleTheme() {
	const { theme, setTheme } = useTheme();
	console.warn(theme);

	return (
		<label className="toggle">
			<input
				className="toggle-checkbox"
				type="checkbox"
				onClick={() => setTheme(!theme)}
			/>
			<div className="toggle-switch" />
		</label>
	);
}

export default ToggleTheme;
