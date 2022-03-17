import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
	auth: authReducer
});

const store = configureStore({
	reducer: rootReducer
});

export default store;

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> = useSelector;
