import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { store } from "./redux/store/store";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { myConfig } from "./config /rootConfig";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = myConfig.BASE_URL

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
