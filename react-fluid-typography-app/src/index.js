import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Header} from './components/Header';

function App() {
  return (
    <Header
      style={{
        '--viewport-from': 320,
        '--viewport-to': 960,
        '--font-size-from': 15,
        '--font-size-to': 50,
      }}
    >
      それは今けっして同じ注文めというものの以上にありないた。やはり次第が注文めもどうしてもその構成たたともが来らていらっしゃるんをは発表祟っうでから、実際には上げよないしならた。名にあっないものはしかるに場合に時々ましずでしょ。
    </Header>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
