import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { RouterProvider } from "react-router";
import router from "./router";
import ThemeProvider from "./contexts/ThemeProvider";

const root = document.getElementById("root");

if (!root) {
	throw new Error("A div with id root must exists");
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
);
