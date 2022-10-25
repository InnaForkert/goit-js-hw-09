import Notiflix from 'notiflix';

const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const form = document.querySelector('.form');
let position = 1;
let promiseInterval;
let delayVal = Number(delay.value);
let stepVal = Number(step.value);
let amountVal = Number(amount.value);

form.addEventListener('submit', createPromise);

function resolvePromise() {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delayVal}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delayVal}ms`);
  }
  position += 1;
  delayVal += stepVal;
  if (position > amountVal) {
    clearInterval(promiseInterval);
    position = 1;
  }
}

function createPromise(event) {
  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = Number(amount.value);
  event.preventDefault();
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    promiseInterval = setInterval(resolvePromise, stepVal);
    resolvePromise();
    }, delayVal);
  })
    return promise;
}
