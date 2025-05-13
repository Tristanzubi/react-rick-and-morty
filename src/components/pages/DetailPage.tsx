import { useLoaderData } from "react-router";
import "../../styles/DetailPage.css";

interface Character {
	name: string;
	image: string;
	status: string;
	species: string;
	location: {
		name: string;
	};
	origin: {
		name: string;
	};
}

function DetailPage() {
	const character = useLoaderData() as Character;

	return (
		<main className="detail-main">
			<section>
				<img src={character.image} alt={character.name} />
				<div>
					<h1>{character.name}</h1>
					<p>
						🟢 {character.status} - {character.species}
					</p>
					<p>Last known location:</p>
					<p>{character.location.name}</p>
					<p>First seen in:</p>
					<p>{character.origin.name}</p>
				</div>
			</section>
		</main>
	);
}

export default DetailPage;
