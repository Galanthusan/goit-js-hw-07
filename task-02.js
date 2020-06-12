const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(item => {
  const ingredientsRef = document.querySelector('#ingredients');
  const itemList = document.createElement('li');
  const itemText = document.createTextNode(item);
  itemList.appendChild(itemText);
  ingredientsRef.appendChild(itemList);
});
