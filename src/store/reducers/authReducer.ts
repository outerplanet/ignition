import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
	initialState: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
	name: 'auth',
	reducers: {
		setToken: (state, { payload }: PayloadAction<string>) => {
			localStorage.setItem('token', payload);
			return payload;
		}
	}
});

export default authSlice.reducer;

export const { setToken } = authSlice.actions;
