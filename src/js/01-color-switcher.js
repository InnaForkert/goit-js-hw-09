const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timer;
const body = document.querySelector('body');

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', colorStop);
stopButton.setAttribute('disabled', '');

function changeColor() {
    timer = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startButton.setAttribute('disabled', '');
    stopButton.removeAttribute('disabled');
}

function colorStop() {
    clearInterval(timer);
    stopButton.setAttribute('disabled', '');
    startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}