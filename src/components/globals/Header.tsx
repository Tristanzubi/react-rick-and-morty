import { Link } from "react-router";
import logo from "../../assets/logo-rick-and-morty.png";
import "../../styles/Header.css";

function Header() {
	return (
		<div className="navbar">
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
			</nav>
		</div>
	);
}

export default Header;
