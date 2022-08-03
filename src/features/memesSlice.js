import { createSlice } from "@reduxjs/toolkit";

export const memesSlice = createSlice({
	name: "memes",
	initialState: [],
	reducers: {
		add: (state, action) => {
			return [...state, action.payload];
		},
		remove: (state, action) => {
			return state.filter((meme) => meme.id !== action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove } = memesSlice.actions;

export default memesSlice.reducer;
