import "./Meme.css";

const Meme = ({ meme }) => {
	const { imgURL, topText, bottomText } = meme;
	return (
		<figure className="image column is-full-mobile is-half-tablet">
			<p className="topText">{topText}</p>
			<img src={imgURL} alt="A fresh new meme." />
			<p className="bottomText">{bottomText}</p>
		</figure>
	);
};

export default Meme;
