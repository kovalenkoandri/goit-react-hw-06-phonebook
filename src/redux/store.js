import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { useSelector } from "react-redux";

// Создай хранилище с configureStore()
// Используй функцию createSlice()
// Создай действия сохранения и удаления контакта, а также обновления фильтра
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux
// Используй библиотеку Redux Persist для сохранения массива контактов в локальное хранилище
const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;