import { configureStore } from "@reduxjs/toolkit";
import memesReducer from "../features/memesSlice";

export default configureStore({ reducer: { memes: memesReducer } });
