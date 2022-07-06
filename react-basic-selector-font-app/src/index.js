import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {SampleText} from './components/SampleText';
import {FontSelector} from './components/FontSelector';

function App() {
  const [attachedFont, setAttachedFont] = useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    if (!document.querySelector(`#${value}`)) {
      const head = document.querySelector('head');
      const link = document.createElement('link');
      link.id = value;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'http://fonts.googleapis.com/css?family=' + value;
      link.media = 'all';
      head.appendChild(link);
    }
    setAttachedFont(value);
  };
  return (
    <>
      <SampleText attachedFont={attachedFont}></SampleText>
      <FontSelector handleChange={handleChange}></FontSelector>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
