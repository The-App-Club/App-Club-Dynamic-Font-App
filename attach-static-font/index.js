function draw() {
  const previewAreaCanvasDom = document.querySelector(".preview-area");
  const previewAreaCanvasDomContext = previewAreaCanvasDom.getContext("2d");
  const w = previewAreaCanvasDom.width;
  const h = previewAreaCanvasDom.height;

  previewAreaCanvasDomContext.save();
  previewAreaCanvasDomContext.clearRect(0, 0, w, h);

  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
  const linearGradient = previewAreaCanvasDomContext.createLinearGradient(
    0,
    0,
    w,
    h
  );
  linearGradient.addColorStop(0, "rgb(0,160,72)");
  linearGradient.addColorStop(0.3, "rgb(0,56,98)");
  linearGradient.addColorStop(0.7, "rgb(200,21,48)");
  linearGradient.addColorStop(1, "rgb(180,140,0)");
  previewAreaCanvasDomContext.fillStyle = linearGradient;
  previewAreaCanvasDomContext.textAlign = "center";
  previewAreaCanvasDomContext.textBaseline = "middle";
  previewAreaCanvasDomContext.font = parameter.fontSize + "px 'Great Vibes' ";

  const sentenceList = parameter.sentence.split("\n");
  let initH = (h - parameter.fontSize * (sentenceList.length - 1)) / 2;
  for (let i = 0; i < sentenceList.length; i++) {
    previewAreaCanvasDomContext.fillText(sentenceList[i], w / 2, initH);
    initH += parameter.fontSize;
  }
  previewAreaCanvasDomContext.restore();
}

let stats;
stats = new Stats();
stats.domElement.style.position = "absolute";
stats.domElement.style.left = 0;
stats.domElement.style.top = 0;
document.body.appendChild(stats.domElement);

let parameter = {
  fontSize: 32,
  sentence: "Banana Fish",
};

let controllerInfo = {
  "Font Size": 32,
};

// https://stackoverflow.com/questions/30372761/map-dat-gui-dropdown-menu-strings-to-values
const gui = new dat.GUI();
gui.width = 300;
gui.add(controllerInfo, "Font Size", 32, 120, 1).onChange((event) => {
  detectChangeParameter(event, "Font Size");
});

function detectChangeParameter(event, keyName) {
  if (keyName === "Font Size") {
    parameter.fontSize = event;
  }
  draw(parameter.fontSize);
}

function loop() {
  requestAnimationFrame(loop);
  stats.begin();
  stats.end();
}

loop();

document.addEventListener("DOMContentLoaded", () => {
  const textareaDom = document.querySelector(".textarea");
  textareaDom.value = parameter.sentence;
  textareaDom.addEventListener("keyup", () => {
    parameter.sentence = textareaDom.value;
    draw();
  });

  window.addEventListener("load", () => {
    draw();
  });
});
