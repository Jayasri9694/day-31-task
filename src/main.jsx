import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/BookReducer/bookReducer.jsx';
import authorReducer from './features/AuthorReducer/authorReducer.jsx';

const store=configureStore({
  reducer:{
    books:bookReducer,
    authors:authorReducer,
   },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)