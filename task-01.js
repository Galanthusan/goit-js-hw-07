const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории`);

const categoriesArray = [...categoriesRef].map(
  categories =>
    `Категория: ${categories.firstElementChild.textContent}, Количество элементов: ${categories.lastElementChild.children.length}`,
);
console.log(categoriesArray);
