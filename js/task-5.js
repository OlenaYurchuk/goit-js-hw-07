function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textColor.textContent;
};

changeColorBtn.addEventListener('click', changeColor);


changeColorBtn.style.background = '#4E75FF';
changeColorBtn.style.width = '148px';
changeColorBtn.style.height = '40px';
changeColorBtn.style.borderRadius = '8px';
changeColorBtn.style.color = 'white';


