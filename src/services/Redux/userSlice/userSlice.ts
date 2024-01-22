import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	user: User | null;
	token: string | null;
}

const initialState: UserState = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			localStorage.setItem('authToken', JSON.stringify(state.token));
		},
		clearUser: (state) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem('authToken');
		},
	},
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
