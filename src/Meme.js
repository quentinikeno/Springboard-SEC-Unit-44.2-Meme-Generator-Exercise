import { useDispatch } from "react-redux";
import { remove } from "./features/memesSlice";
import "./Meme.css";

const Meme = ({ meme }) => {
	const { id, imgURL, topText, bottomText } = meme;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(remove(id));
	};

	return (
		<div className="image column is-full-mobile is-half-tablet">
			<button className="delete is-large" onClick={handleDelete}></button>
			{topText && <p className="topText">{topText}</p>}
			<img src={imgURL} alt="A fresh new meme." />
			{bottomText && <p className="bottomText">{bottomText}</p>}
		</div>
	);
};

export default Meme;
