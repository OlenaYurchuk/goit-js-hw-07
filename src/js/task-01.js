const numberOfCategories = document.getElementById('categories').children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = document.querySelectorAll('h2');
const arrayOfCategories = Array.from(categories);
arrayOfCategories.forEach((item) => {
  console.log('Category: ' +  item.textContent);
  console.log('Elements: ' + item.nextElementSibling.children.length);
});