import MemesContainer from "./MemesContainer";
import "./App.css";
import MemeForm from "./MemeForm";

function App() {
	return (
		<div className="App">
			<section class="hero is-primary">
				<div class="hero-body">
					<h1 class="title">Meme Generator</h1>
					<p class="subtitle">Now with Redux!</p>
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
