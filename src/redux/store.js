import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/reducers';
// Используй функцию createSlice()
// Создай действия сохранения и удаления контакта, а также обновления фильтра
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux
// Используй библиотеку Redux Persist для сохранения массива контактов в локальное хранилище




export const store = configureStore({reducer: rootReducer});
