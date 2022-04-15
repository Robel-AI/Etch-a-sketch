const cDiv = document.querySelector('.container');

const grids = document.querySelector('#gridSize')

const resetButton = document.querySelector('#reset')


window.onload = gridMake();


function gridMake() {
  for (let i = 1; i < 1250; i++) {
    const div = document.createElement('div');
    cDiv.appendChild(div);
    div.addEventListener('mouseover', () =>{
      div.style.backgroundColor = randomColor();  
    })
    div.addEventListener('mouseover', () =>{
     div.style.backgroundClip = changeColor;
    })
    grids.addEventListener('click', () => {
      cDiv.removeChild(div)
      
    })
   
  }
};
  
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

 
 grids.addEventListener('click', function(){
   gridSize()
 })

function gridSize () {
  let i = prompt('how many grids do you want?',);
  if( i < 200){ 
    return alert('The number exceeds the limit')
   }  
   else{
    for (let j = 0;j <= i; j++) {
      const div = document.createElement('div');

      cDiv.appendChild(div);
      grids.setAttribute('disabled', true)
      div.addEventListener('mouseover', () =>{
        div.style.backgroundColor = randomColor();  
      })
     
   }

 
}}

resetButton.addEventListener('click', () =>{
  window.location.reload()
});