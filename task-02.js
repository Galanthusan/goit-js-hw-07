const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.innerHTML = ingredients
  .map(item => '<li>' + item + '</li>')
  .join('');
