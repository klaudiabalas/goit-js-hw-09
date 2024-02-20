// Opisany w dokumentacji
// Dodatkowy import stylów
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]');
const datePikcer = document.querySelector('#datetime-picker');

const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startButton.setAttribute('disabled', true);
      window.alert('Please choose a date in the future');
    } else startButton.removeAttribute('disabled');
  },
};

flatpickr(datePikcer, options);

const addLeadingZero = value => value.toString().padStart(2, '0');

startButton.addEventListener('click', () => {
  setInterval(() => {
    datePikcer.setAttribute('disabled', true);
    startButton.setAttribute('disabled', true);
    const differenceInMs = new Date(datePikcer.value) - new Date();

    if (differenceInMs < 0) {
      clearInterval();
      datePikcer.removeAttribute('disabled');
      startButton.removeAttribute('disabled');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(differenceInMs);

    spanDays.textContent = addLeadingZero(days);
    spanHours.textContent = addLeadingZero(hours);
    spanMinutes.textContent = addLeadingZero(minutes);
    spanSeconds.textContent = addLeadingZero(seconds);

    console.log(convertMs(differenceInMs));
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
