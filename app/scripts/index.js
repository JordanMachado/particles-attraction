import WebGL from './WebGL';
import deviceType from 'ua-device-type';
import LOL from './LOL';
import domReady from 'domready';
import raf from 'raf';
import dat from 'dat-gui';
import 'gsap';

// Vars
window.DEBUG = false;
let device;
let webGL;


console.warn = () => {};

function animate() {
  raf(animate);
  webGL.render();
}

// Events
function resize() {
  webGL.resize(window.innerWidth, window.innerHeight);
}
// KeyBoard
function keyPress(e) {
  if (!webGL.params.events.keyboard.press) return;
  webGL.keyPress(e);
}
function keyDown(e) {
  if (!webGL.params.events.keyboard.down) return;
  webGL.keyDown(e);
}
function keyUp(e) {
  if (!webGL.params.events.keyboard.up) return;
  webGL.keyUp(e);
}
// Mouse
function click(e) {
  if (!webGL.params.events.mouse.click) return;
  webGL.click(e.clientX, e.clientY, e.timeStamp);
}
function mouseMove(e) {
  if (!webGL.params.events.mouse.move) return;
  webGL.mouseMove(e.clientX, e.clientY, e.timeStamp);
}
// Touch
function touchStart(e) {
  if (!webGL.params.events.touch.start) return;
  webGL.touchStart(e.touches);
}
function touchEnd(e) {
  if (!webGL.params.events.touch.end) return;
  webGL.touchEnd(e.touches);
}
function touchMove(e) {
  if (!webGL.params.events.touch.move) return;
  webGL.touchMove(e.touches);
}

domReady(() => {
  device = deviceType(navigator.userAgent);
  document.querySelector('html').classList.add(device);

  if (window.DEBUG || window.DEVMODE) {
    window.gui = new dat.GUI();
  }
  // WebGL
  webGL = new WebGL({
    device,
    name: 'Particles attraction',
    postProcessing: true,
    size: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });
  document.body.appendChild(webGL.renderer.domElement);

  // Events
  window.addEventListener('resize', resize);
  // KeyBoard
  window.addEventListener('keypress', keyPress);
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);
  // Mouse
  window.addEventListener('click', click);
  window.addEventListener('mousemove', mouseMove);
  // Touch
  window.addEventListener('touchstart', touchStart);
  window.addEventListener('touchend', touchEnd);
  window.addEventListener('touchmove', touchMove);

  // let's start
  animate();
});
