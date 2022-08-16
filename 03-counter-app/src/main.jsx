import React from 'react'
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp';
import {FirstApp} from './FirstApp.jsx'
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp ></FirstApp> */}
    <CounterApp></CounterApp>
  </React.StrictMode>
);