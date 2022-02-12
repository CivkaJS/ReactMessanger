import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Router from './pages/Router'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store';

export const MyThemeContext = React.createContext();

// const handleDeleteChat = () => {
//   console.log('Delete');
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyThemeContext.Provider value={{ theme: 'dark' }}>
      {/* <MyThemeContext.Provider value={handleDeleteChat}> */}
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </MyThemeContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
