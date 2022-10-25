import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let {
    elements: { delay, step, amount },
  } = event.currentTarget;
  amount = Number(amount.value);
  delay = Number(delay.value);
  step = Number(step.value);
  for (let i = 0; i < amount; i += 1) {
    createPromise({ i, delay })
      .then(({ i, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${i + 1} in ${delay}ms`);
      })
      .catch(({ i, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${i + 1} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise({ i, delay }) {
  const shouldResolve = Math.random() > 0.3;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(delay);
      if (shouldResolve) {
        resolve({ i, delay });
      } else {
        reject({ i, delay });
      }
    }, delay);
  });
  return promise;
}
