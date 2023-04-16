import * as actionTypes from '../constants/actionTypes';


export const updateObject = (oldObject, updatedProperties) => {
	const updated = {
		...oldObject,
		...updatedProperties,
	};
	return updated;
};

const initialState = {
	token: "null",
	// token: null,
	user: {
		type: "tpo",
	},
	currentRoute: "{}",
	loginInProgress: false,
}

const authStart = (state, action) => {
	return updateObject(state, { loginInProgress: true })
}

const authLogout = (state, action) => {
	return updateObject(state, { token: null, user: null })
}

const authUserVerfiedOrNot = (state, action) => updateObject(state, {
	user: action.user,
	token: action.token,
	loginInProgress: false,
})

const updateCurrRoute = (state, action) => updateObject(state, {
	currentRoute: action.currentRoute
})

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action)
		case actionTypes.AUTH_SUCCESS:
			return authUserVerfiedOrNot(state, action)
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action)
		case actionTypes.UPDATE_CURR_ROUTE:
			return updateCurrRoute(state, action)
		default:
			return state
	}
}

export default authReducer