import { useSelector } from "react-redux";
import Meme from "./Meme";

const MemesContainer = () => {
	const memes = useSelector((state) => state.memes);

	return (
		<div className="columns is-desktop is-multiline">
			{memes.map((meme) => (
				<Meme meme={meme} />
			))}
		</div>
	);
};

export default MemesContainer;
