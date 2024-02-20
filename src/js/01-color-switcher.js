const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

const body = document.querySelector('body');
let timer = null;
stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopButton.disabled = false;
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
});
