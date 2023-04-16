import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import studentReducer from "./reducers/student";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		student: studentReducer,
	},
});