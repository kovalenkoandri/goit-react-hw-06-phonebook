import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
export const addTask = createAction('tasks/addTask', (name, number) => {
  return {
    payload: { id: nanoid(), name, number },
  };
});
export const rmTask = createAction('tasks/rmTask');
export const filterTask = createAction('tasks/filterTask');