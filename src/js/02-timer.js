import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const TIMER_STEP = 1000;
let timerId = null;
let date = null;
let timeDiff = 0;

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const cleanBtn = document.querySelector('button[data-clean]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
cleanBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
cleanBtn.addEventListener('click', onCleanBtnClick);

flatpickr(inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = selectedDates[0];
    startBtnActivation();
  },
});

function startBtnActivation() {
  const currentDate = Date.now();
  const selectedDate = new Date(date).getTime();

  timeDiff = selectedDate - currentDate;
  startBtn.disabled = false;

  if (currentDate > selectedDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    startBtn.disabled = true;
    return;
  }
}

function onStartBtnClick() {
  inputEl.disabled = true;
  startBtn.disabled = true;
  cleanBtn.disabled = false;

  timerId = setInterval(() => {
    timeDiff -= TIMER_STEP;
    const timeElements = converMs(timeDiff);
    updateClockFace(timeElements);
  }, TIMER_STEP);
}

function updateClockFace(obj) {
    const { days, hours, minutes, seconds } = obj;
    days.textContent = `${}`
}

function addLeadingZero(value)

function onCleanBtnClick() {}

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
