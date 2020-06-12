const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);

const valueRef = document.querySelector('#value');

let counter = 0;
const decrement = () => {
  counter -= 1;
  valueRef.innerHTML = counter;
};

const increment = () => {
  counter += 1;
  valueRef.innerHTML = counter;
};

decrementBtnRef.addEventListener('click', decrement);
incrementBtnRef.addEventListener('click', increment);
