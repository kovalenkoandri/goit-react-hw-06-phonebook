// import { addTask, rmTask, filterTask } from 'redux/actions';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
  visibleContacts: [],
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        // return { ...state, contacts: [...state.contacts, action.payload] };
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        const id = nanoid();
        return {
          payload: { id, name, number },
        };
      },
    },
    rmTask(state, action) {
      // const contacts = state.contacts.filter(
      //   removed => removed.id !== action.payload
      // );
      // return { ...state, contacts };
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterTask(state, action) {
      const filter = action.payload;
      const visibleContacts = state?.contacts.filter(element =>
        element?.name
          .toLocaleUpperCase()
          .includes(action.payload.toLocaleUpperCase())
      );
      return { ...state, filter, visibleContacts };
    },
  },
});

const persistConfig = {
  key: 'tasks',
  storage,
  blacklist: ['filter'],
};

export const rootReducer = persistReducer(persistConfig, tasksSlice.reducer);
export const { addTask, rmTask, filterTask } = tasksSlice.actions;
