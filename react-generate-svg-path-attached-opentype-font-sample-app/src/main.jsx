import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {useEffect, useRef} from 'react';
import '@fontsource/inter';
import './styles/index.scss';
import opentype from 'opentype.js';
import eduVICWANTBeginner from './fonts/EduVICWANTBeginner-VariableFont_wght.ttf';
import robotoBlack from './fonts/Roboto-Black.ttf';
import oleoScript from './fonts/OleoScript-Regular.ttf';

const App = () => {
  const svgDomRef = useRef(null);
  const pathDomRef = useRef(null);
  const svgDomRef2 = useRef(null);
  const pathDomRef2 = useRef(null);
  const svgDomRef3 = useRef(null);
  const pathDomRef3 = useRef(null);

  useEffect(() => {
    (async () => {
      const font = await opentype.load(eduVICWANTBeginner);
      const path = font.getPath('Hello, World!', 0, 0, 72);
      const {x1, y1, x2, y2} = path.getBoundingBox();
      const x = x1;
      const y = y1;
      const w = x2 - x1;
      const h = y2 - y1;
      const viewbox = `${x} ${y} ${w} ${h}`;
      svgDomRef.current.setAttribute('viewBox', viewbox);
      pathDomRef.current.setAttributeNS(null, 'd', path.toPathData());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const font = await opentype.load(robotoBlack);
      const path = font.getPath('Hello, World!', 0, 0, 72);
      const {x1, y1, x2, y2} = path.getBoundingBox();
      const x = x1;
      const y = y1;
      const w = x2 - x1;
      const h = y2 - y1;
      const viewbox = `${x} ${y} ${w} ${h}`;
      svgDomRef2.current.setAttribute('viewBox', viewbox);
      pathDomRef2.current.setAttributeNS(null, 'd', path.toPathData());
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const font = await opentype.load(oleoScript);
      const path = font.getPath('Hello, World!', 0, 0, 72);
      const {x1, y1, x2, y2} = path.getBoundingBox();
      const x = x1;
      const y = y1;
      const w = x2 - x1;
      const h = y2 - y1;
      const viewbox = `${x} ${y} ${w} ${h}`;
      svgDomRef3.current.setAttribute('viewBox', viewbox);
      pathDomRef3.current.setAttributeNS(null, 'd', path.toPathData());
    })();
  }, []);
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        min-height: 100vh;
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
      `}
    >
      <h2>This is sample</h2>
      <hr
        className={css`
          width: 100%;
          height: 1rem;
          background-image: repeating-linear-gradient(
            45deg,
            #0078aa,
            #0078aa 10px,
            #3ab4f2 10px,
            #3ab4f2 20px
          );
        `}
      />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            flex-direction: column;
          }
          gap: 2rem;
        `}
      >
        <h3>EduVICWANTBeginner</h3>
        <svg
          ref={svgDomRef}
          className={css`
            display: block;
            width: 300px;
            /* border: 1px solid; */
          `}
        >
          <g>
            <path ref={pathDomRef} d={`M0,0Z`} />
          </g>
        </svg>
      </div>
      <hr
        className={css`
          width: 100%;
        `}
      />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            flex-direction: column;
          }
          gap: 2rem;
        `}
      >
        <h3>Roboto-Black</h3>
        <svg
          ref={svgDomRef2}
          className={css`
            display: block;
            width: 300px;
            /* border: 1px solid; */
          `}
        >
          <g>
            <path ref={pathDomRef2} d={`M0,0Z`} />
          </g>
        </svg>
      </div>
      <hr
        className={css`
          width: 100%;
        `}
      />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 768px) {
            flex-direction: column;
          }
          gap: 2rem;
        `}
      >
        <h3>OleoScript</h3>
        <svg
          ref={svgDomRef3}
          className={css`
            display: block;
            width: 300px;
            /* border: 1px solid; */
          `}
        >
          <g>
            <path ref={pathDomRef3} d={`M0,0Z`} />
          </g>
        </svg>
      </div>
      <hr
        className={css`
          width: 100%;
          height: 1rem;
          background-image: repeating-linear-gradient(
            45deg,
            #ca4e79,
            #ca4e79 10px,
            #ffc18e 10px,
            #ffc18e 20px
          );
        `}
      />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
