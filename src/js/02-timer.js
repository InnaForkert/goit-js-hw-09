import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let now = new Date();
let format;
let countdown;
let difference;
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startTimer = document.querySelector('[data-start]');
const datePicker = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: now,
  minuteIncrement: 1,
  onClose(selectedDates) {
      difference = selectedDates[0] - now;
      if (selectedDates[0] < now) {
          Notiflix.Notify.warning("Please choose a date in the future");
      } else {
          startTimer.removeAttribute('disabled');
      }
      convertMs(difference);
  },
};

startTimer.setAttribute('disabled', '');
startTimer.addEventListener('click', startCountdown)

flatpickr(datePicker, options);

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
    format = { days, hours, minutes, seconds };
    addLeadingZero(format);
}

function startCountdown() {
    countdown = setInterval(intervalFunction, 1000)
    intervalFunction();
    startTimer.setAttribute('disabled', '');
}

function intervalFunction() {
    days.innerHTML = format.days;
    hours.innerHTML = format.hours;
    minutes.innerHTML = format.minutes;
    seconds.innerHTML = format.seconds;
    difference -= 1000;
    convertMs(difference);
}
    
function addLeadingZero(format) {
    for (let key of Object.keys(format)) {
        format[key] = format[key].toString().padStart(2, '0');
    }
    return format;
}

