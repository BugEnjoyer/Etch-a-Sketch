const sketchContainer = document.querySelector('.draw-flex-container');
const inputElement = document.querySelector('.input-value');
const colorInput = document.querySelector('.color-input');
let value = inputElement.value;
let colorValue = "#000000";
let numDiv = value*value;
function createGrid(value){
  numDiv = value*value;
  sketchContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  document.querySelectorAll('.grid').forEach(e => e.remove());
  for (i=0; i <= numDiv; i++) {
     let divs = document.createElement('div');
     divs.classList.add("grid");
     divs.addEventListener ('mouseover', applyColor)
    sketchContainer.appendChild(divs);
  }
};
//Also possible with sketchContainer.insertAdjacentElement("beforeend", divs);  very usefull 
// becouse many possibilities instead of just "beforeend". Instead of using appendChild


inputElement.addEventListener('input', () => {
  value = inputElement.value;
  createGrid(value);
  return value;
});



colorInput.addEventListener('input', () => {
  colorValue = colorInput.value;
  return colorValue;
});

const eraser = document.querySelector('.eraser-btn');
eraser.addEventListener('click', () => colorValue = "#FFFFFF");

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  clearBoard();
});

function clearBoard() {
  let divs = document.querySelectorAll('.grid');
  divs.forEach((divs) => divs.style.backgroundColor = "white");
};

const randomColor = document.querySelector('.rainbow-btn');
randomColor.addEventListener('click', () => colorValue = `hsl(${Math.random() * 360 }, 100%, 50%)`);

function applyColor () {
  this.style.backgroundColor = `${colorValue}`;
}

function setColor() {
  colorValue = color;
}










