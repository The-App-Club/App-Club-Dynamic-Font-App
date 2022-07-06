import {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {default as randomItem} from 'random-item';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import {Button} from '@mui/material';
import './index.scss';

import {Pudding} from './components/Pudding';

const App = ({context}) => {
  const [doRender, setDoRender] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isTik, setIsTik] = useState(new Date());
  const [config, setConfig] = useState({
    google: {
      families: ['Love Ya Like A Sister'],
    },
  });
  const [family, setFamily] = useState('Love Ya Like A Sister');
  const [category, setCategory] = useState('cursive');
  const [choicedFont, setChoicedFont] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/honeysilvas/google-fonts/dev/json/google-web-font-list.json`
      );
      const json = await response.json();
      const choicedFont = randomItem(json.items);
      console.log(choicedFont);
      setConfig({
        google: {
          families: [choicedFont.family],
        },
      });
      setFamily(choicedFont.family);
      setCategory(choicedFont.category);
      setChoicedFont(choicedFont);
    })();
  }, [isTik]);

  const handleClick = () => {
    setIsTik(new Date());
  };

  const callback = (status) => {
    if (status === `loading`) {
      setDoRender(false);
      setShowMessage(false);
    } else if (status === `active`) {
      setDoRender(true);
      setShowMessage(false);
    } else if (status === `inactive`) {
      setDoRender(false);
      setShowMessage(true);
    } else {
      setDoRender(false);
      setShowMessage(true);
    }
  };

  return (
    <WebfontLoader config={config} onStatus={callback}>
      <div className="app">
        {showMessage && <p>Next Choice!</p>}
        <Button variant="contained" onClick={handleClick}>
          Random Choice
        </Button>
        {doRender && (
          <Pudding
            family={family}
            category={category}
            choicedFont={choicedFont}
          ></Pudding>
        )}
      </div>
    </WebfontLoader>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App context={{}} />);
