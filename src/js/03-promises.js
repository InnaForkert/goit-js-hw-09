import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const form = document.querySelector('.form');
let position = 1;
let promiseInterval;
let whaat;
// console.log(delay.value);

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position);
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay.value}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay.value}ms`);
  }
  if (position === amount.value) {
    clearInterval(promiseInterval);
    position = 1;
  }
  increasePosition();
}

function increasePosition() {
  whaat = setInterval(() => {position += 1}, 0);
}
 
function handleSubmit(event) {
  event.preventDefault();
  setTimeout(() => {
    promiseInterval = setInterval(createPromise, 1200, position, delay);
  }, delay.value)
}
