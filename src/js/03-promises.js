import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const form = document.querySelector('.form');
let position = 1;
let promiseInterval;

form.addEventListener('submit', createPromise);

function resolvePromise() {
  let delayVal = Number(delay.value);
  let stepVal = Number(step.value);
  let amountVal = Number(amount.value);
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delayVal}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delayVal}ms`);
  }
  position += 1;
  delayVal += stepVal;
  if (position == amount.value) {
    clearInterval(promiseInterval);
    position = 1;
  }
}

function createPromise(event) {
  event.preventDefault();
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    promiseInterval = setInterval(resolvePromise, step.value);
    }, delay.value);
  })
    return promise;

}

// createPromise(position, delay).then(increasePosition);
  
// function increasePosition() {
//   position += 1;
//   console.log(position);
// };
 
// function handleSubmit(event) {
//   event.preventDefault();
//   // setTimeout(() => {
//   //   promiseInterval = setInterval(createPromise, step.value, position, delay);
//   // }, delay.value)
  

// }
