import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Router from './pages/Router'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from './store';
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from '@mui/material';

export const MyThemeContext = React.createContext();

// const handleDeleteChat = () => {
//   console.log('Delete');
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
      {/* <MyThemeContext.Provider value={{ theme: 'dark' }}> */}
      {/* <MyThemeContext.Provider value={handleDeleteChat}> */}
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      {/* </MyThemeContext.Provider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
