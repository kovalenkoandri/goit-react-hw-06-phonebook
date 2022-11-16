import { nanoid } from 'nanoid';

export const addTask = (name, number) => {
  return {
    type: 'tasks/addTask',
    payload: { id: nanoid(), name, number },
  };
};
export const rmTask = id => {
  return {
    type: 'tasks/rmTask',
    payload: id,
  };
};
export const filterTask = value => {
  return {
    type: 'tasks/filterTask',
    payload: value,
  };
};
