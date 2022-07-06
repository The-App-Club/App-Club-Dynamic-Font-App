import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Pudding} from './components/Pudding';

function App() {
  return <Pudding></Pudding>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
