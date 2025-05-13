import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { RouterProvider } from "react-router";
import router from "./router";

const root = document.getElementById("root");

if (!root) {
	throw new Error("A div with id root must exists");
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
