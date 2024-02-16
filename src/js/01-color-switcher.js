const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timer = null;
stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  timer = setInterval(() => {
    background.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disbled = false;
});

stop.addEventListener('click', () => {
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
});
