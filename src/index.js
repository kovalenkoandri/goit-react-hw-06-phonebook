import React from 'react';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

//  const contacts = [
//  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//  ];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
/* <App contacts={contacts} /> */
/* <App onSubmit={values => values} /> */
