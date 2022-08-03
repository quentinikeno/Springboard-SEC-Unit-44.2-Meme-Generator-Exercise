const initialState = [];

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "NEW":
			return [...state, action.payload];
		default:
			return state;
	}
}

export default rootReducer;
