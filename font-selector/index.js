let fontFamilyList = [
  'Montez',
  'Lobster',
  'Josefin Sans',
  'Shadows Into Light',
  'Pacifico',
  'Amatic SC',
  'Orbitron',
  'Rokkitt',
  'Righteous',
  'Dancing Script',
  'Bangers',
  'Chewy',
  'Sigmar One',
  'Architects Daughter',
  'Abril Fatface',
  'Covered By Your Grace',
  'Kaushan Script',
  'Gloria Hallelujah',
  'Satisfy',
  'Lobster Two',
  'Comfortaa',
  'Cinzel',
  'Courgette',
];

function reset() {
  const selectDom = document.querySelector('select');
  const optionDomList = selectDom.querySelectorAll('option');
  for (let index = 0; index < optionDomList.length; index++) {
    const optionDom = optionDomList[index];
    optionDom.parentElement.removeChild(optionDom);
  }
}

function init() {
  reset();
  const selectDom = document.querySelector('select');
  for (let i = 0; i < fontFamilyList.length; i++) {
    const optionDom = document.createElement('option');
    optionDom.value = optionDom.innerHTML = fontFamilyList[i];
    optionDom.style.fontFamily = fontFamilyList[i];
    selectDom.add(optionDom);
  }
}

function fontChange(selectedFontFamily) {
  document.body.insertAdjacentHTML(
    'beforeend',
    "<style> .preview-text{ font-family:'" +
      selectedFontFamily +
      "';}" +
      "select{font-family:'" +
      selectedFontFamily +
      "';</style>"
  );
}

let stats;
stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = 0;
stats.domElement.style.top = 0;
document.body.appendChild(stats.domElement);

let parameter = {
  fontFamily: 'Montez',
};

let controllerInfo = {
  'Font Family': 'Montez',
};

// https://stackoverflow.com/questions/30372761/map-dat-gui-dropdown-menu-strings-to-values
const gui = new dat.GUI();
gui.width = 300;
gui
  .add(controllerInfo, 'Font Family', {
    Montez: 'Montez',
    Lobster: 'Lobster',
    'Josefin Sans': 'Josefin Sans',
    'Shadows Into Light': 'Shadows Into Light',
    Pacifico: 'Pacifico',
    'Amatic SC': 'Amatic SC',
    Orbitron: 'Orbitron',
    Rokkitt: 'Rokkitt',
    Righteous: 'Righteous',
    'Dancing Script': 'Dancing Script',
    Bangers: 'Bangers',
    Chewy: 'Chewy',
    'Sigmar One': 'Sigmar One',
    'Architects Daughter': 'Architects Daughter',
    'Abril Fatface': 'Abril Fatface',
    'Covered By Your Grace': 'Covered By Your Grace',
    'Kaushan Script': 'Kaushan Script',
    'Gloria Hallelujah': 'Gloria Hallelujah',
    Satisfy: 'Satisfy',
    'Lobster Two': 'Lobster Two',
    Comfortaa: 'Comfortaa',
    Cinzel: 'Cinzel',
    Courgette: 'Courgette',
  })
  .onChange((event) => {
    detectChangeParameter(event, 'Font Family');
  })
  .onFinishChange((event) => {
    // https://stackoverflow.com/questions/30372761/map-dat-gui-dropdown-menu-strings-to-values
    // https://github.com/dataarts/dat.gui/blob/master/API.md#Controller+onFinishChange
    for (let i in gui.__controllers) {
      const currentSelectedFontFamily =
        gui.__controllers[i].__select.selectedOptions[0].value;
      const currentSelectedIndex = fontFamilyList.findIndex((fontFamily) => {
        return fontFamily === currentSelectedFontFamily;
      });
      document.querySelector('select').selectedIndex = currentSelectedIndex;
    }
  });

function detectChangeParameter(event, keyName) {
  if (keyName === 'Font Family') {
    parameter.fontFamily = event;
  }
  fontChange(parameter.fontFamily);
}

function loop() {
  requestAnimationFrame(loop);
  stats.begin();
  stats.end();
}

loop();

window.addEventListener('load', init);
window.addEventListener('resize', init);
