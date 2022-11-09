import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({ reducer: rootReducer });
