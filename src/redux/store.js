import { configureStore } from '@reduxjs/toolkit';
// Используй функцию createSlice()
// Создай действия сохранения и удаления контакта, а также обновления фильтра
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux
// Используй библиотеку Redux Persist для сохранения массива контактов в локальное хранилище
const initialState = {
  contacts: [],
  filter: '',
  visibleContacts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'tasks/rmTask':
      const contacts = state.contacts.filter(
        removed => removed.id !== action.payload
      );
      return { ...state, contacts };
    case 'tasks/filterTask':
      const filter = action.payload;
      const visibleContacts = state?.contacts.filter(element =>
        element?.name
          .toLocaleUpperCase()
          .includes(action.payload.toLocaleUpperCase())
      );
      return { ...state, filter, visibleContacts };

    default:
      return state;
  }
};

export const store = configureStore({reducer: rootReducer});
