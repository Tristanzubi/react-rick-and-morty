import { NavLink } from "react-router";
import "../styles/Card.css";

interface RickProps {
	name: string;
	image: string;
	id: number;
}
function Card({ name, image, id }: RickProps) {
	return (
		<NavLink to={`/detail/${id}`}>
			<figure className="character-card">
				<img src={image} alt={name} />
				<figcaption>{name}</figcaption>
			</figure>
		</NavLink>
	);
}

export default Card;
