import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DetailPage from "./components/pages/DetailPage";

const homeLoader = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character");
	if (!res.ok) {
		throw new Error("Erreur lors du chargement des personnages");
	}
	const data = await res.json();
	return data.results;
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				loader: homeLoader,
				index: true,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/detail/:id",
				element: <DetailPage />,
				loader: ({ params }) =>
					fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
			},
		],
	},
]);

export default router;
