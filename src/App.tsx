import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
