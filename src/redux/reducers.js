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
