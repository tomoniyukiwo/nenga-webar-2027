const welcome = document.querySelector('#welcome');
const sceneWrap = document.querySelector('#scene-wrap');
const arUi = document.querySelector('#ar-ui');
const fallback = document.querySelector('#fallback');
const statusText = document.querySelector('#status');
const marker = document.querySelector('#marker');

function showWelcome() {
  welcome.hidden = false;
  sceneWrap.hidden = true;
  arUi.hidden = true;
  fallback.hidden = true;
}

document.querySelector('#start').addEventListener('click', () => {
  welcome.hidden = true;
  sceneWrap.hidden = false;
  arUi.hidden = false;
  window.dispatchEvent(new Event('resize'));
});

document.querySelector('#preview').addEventListener('click', () => {
  welcome.hidden = true;
  fallback.hidden = false;
});

document.querySelector('#close').addEventListener('click', showWelcome);
document.querySelector('#back').addEventListener('click', showWelcome);

marker.addEventListener('markerFound', () => {
  statusText.textContent = '見つけました。Happy New Year!';
  navigator.vibrate?.(80);
});

marker.addEventListener('markerLost', () => {
  statusText.textContent = '年賀状のマーカーを映してください';
});

window.addEventListener('camera-error', () => {
  sceneWrap.hidden = true;
  arUi.hidden = true;
  fallback.hidden = false;
});
