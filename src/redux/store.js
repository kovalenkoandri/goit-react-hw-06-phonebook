import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({ reducer: rootReducer });
// Создай хранилище с configureStore()
// Используй функцию createSlice()
// Создай действия сохранения и удаления контакта, а также обновления фильтра
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux
// Используй библиотеку Redux Persist для сохранения массива контактов в локальное хранилище
// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };