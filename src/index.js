import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import myLogger from './middlewares/myLogger';
import { composeWithDevTools } from '@redux-devtools/extension';
import ReduxThunk from 'redux-thunk';
//리덕스데브툴즈적용 composeWithDevTools(미들웨어 적용)
//미들웨어 적용 applyMiddelware(미들웨어1, 미들웨어2)
const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(ReduxThunk,myLogger)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
