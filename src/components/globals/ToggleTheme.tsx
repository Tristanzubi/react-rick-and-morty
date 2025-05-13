import "../../styles/ToggleTheme.css";

function ToggleTheme() {
	return (
		<label className="toggle">
			<input className="toggle-checkbox" type="checkbox" />
			<div className="toggle-switch" />
		</label>
	);
}

export default ToggleTheme;
