const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = document.querySelectorAll('h2');
categories.forEach((item) => {
  console.log('Category: ' +  item.textContent);
  console.log('Elements: ' + item.nextElementSibling.children.length);
});