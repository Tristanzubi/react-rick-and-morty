import { Link } from "react-router";
import logo from "../../assets/logo-rick-and-morty.png";
import "../../styles/Header.css";
import ToggleTheme from "./ToggleTheme";

function Header() {
	return (
		<header className="navbar">
			<img src={logo} alt="logo de rick and morty" />
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/login">Connexion</Link>
					</li>
				</ul>
				<ToggleTheme />
			</nav>
		</header>
	);
}

export default Header;
