import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./features/memesSlice";
import { v4 as uuid } from "uuid";

const MemeForm = () => {
	const initialState = { imgURL: "", topText: "", bottomText: "" };
	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(add({ ...formData, id: uuid() }));
		setFormData(() => initialState);
	};

	return (
		<form className="field my-4 p-3" onSubmit={handleSubmit}>
			<div className="field">
				<label className="label" htmlFor="imgURL">
					Image URL
				</label>
				<div className="control">
					<input
						className="input"
						type="url"
						name="imgURL"
						id="imgURL"
						value={formData.imgURL}
						placeholder="What's the URL of your meme image?"
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="topText">
					Top Text
				</label>
				<div className="control">
					<input
						className="input"
						type="text"
						name="topText"
						id="topText"
						value={formData.topText}
						placeholder="What's the top text of your meme image?"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label" htmlFor="bottomText">
					Bottom Text
				</label>
				<div className="control">
					<input
						className="input"
						type="text"
						name="bottomText"
						id="bottomText"
						value={formData.bottomText}
						placeholder="What's the bottom text of your meme image?"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-primary">Create Meme!</button>
				</div>
			</div>
		</form>
	);
};

export default MemeForm;
