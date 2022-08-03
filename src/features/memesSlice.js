import { createSlice } from "@reduxjs/toolkit";

export const memesSlice = createSlice({
	name: "memes",
	initialState: [],
	reducers: {
		add: (state, action) => {
			return [...state, action.payload];
		},
	},
});

// Action creators are generated for each case reducer function
export const { add } = memesSlice.actions;

export default memesSlice.reducer;
