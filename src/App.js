import MemesContainer from "./MemesContainer";
import "./App.css";
import MemeForm from "./MemeForm";

function App() {
	return (
		<div className="App">
			<section className="hero is-primary">
				<div className="hero-body">
					<h1 className="title">Meme Generator</h1>
					<p className="subtitle">Now with Redux!</p>
				</div>
			</section>
			<div className="container">
				<MemeForm />
				<MemesContainer />
			</div>
		</div>
	);
}

export default App;
