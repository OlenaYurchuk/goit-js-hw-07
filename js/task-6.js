function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputElements = document.querySelector('[type=number]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesElements = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  if (parseInt(inputElements.value) > inputElements.max || 
      parseInt(inputElements.value) < inputElements.min) {
    alert('Please enter a number from 1 to 100');
  } else {
    boxesElements.innerHTML = '';
    createBoxes(inputElements.value);
  }
  inputElements.value = '';
})

function destroyBoxes() {
  inputElements.value = '';
  boxesElements.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i++) {
    size += 10;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArray.push(div);
  }
  boxesElements.insertAdjacentHTML('beforeend', boxesArray.join(''));
}
