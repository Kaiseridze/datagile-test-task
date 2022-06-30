import React from "react";
import "./index.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
function App() {
	return (
		<>
			<Header />
			<Layout>
				<Home/>
			</Layout>
		</>
	);
}

export default App;
