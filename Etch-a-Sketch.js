const sketchContainer = document.querySelector('.draw-flex-container');
let inputElement = document.querySelector('.input-value');
let value = inputElement.value;
let numDiv = value*value;
function createGrid(value){
  numDiv = value*value;
  sketchContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  document.querySelectorAll('.grid').forEach(e => e.remove());
  for (i=0; i <= numDiv; i++) {
     let divs = document.createElement('div');
     divs.classList.add("grid");
     divs.addEventListener ('mouseover', () => {
      divs.style.backgroundColor = "black";
     })
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







