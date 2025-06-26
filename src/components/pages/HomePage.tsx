import Card from "../Card";
import "../../styles/HomePage.css";
import { useLoaderData } from "react-router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import useTheme from "../../utils/useTheme";

interface RickData {
	id: number;
	image: string;
	name: string;
}
function HomePage() {
	const { theme } = useTheme();
	const data = useLoaderData() as RickData[];
	const [text, setTexte] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setTexte(e.target.value);
	}

	const filteredData = data.filter((el) =>
		el.name.toLowerCase().includes(text.toLowerCase()),
	);

	return (
		<section className={`home-page ${theme && "light"}`}>
			<h1>Rick and Morty</h1>
			<input
				type="text"
				placeholder="Trouver un personnage"
				onChange={handleChange}
			/>
			<div>
				{filteredData.length === 0 ? (
					<p>Aucun personnage trouvé</p>
				) : (
					filteredData.map((el) => (
						<Card key={el.id} name={el.name} image={el.image} id={el.id} />
					))
				)}
			</div>
		</section>
	);
}

export default HomePage;
