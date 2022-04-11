const cDiv = document.querySelector('.container');

  for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    cdiv.appendChild(div);
    div.addEventListener('mouseover', () =>{
      div.style.backgroundColor = 'red';
    })

  }


 const grids = document.querySelector('button');
 grids.addEventListener('click', function(){
   gridSize()
 })

function gridSize () {
  let i = prompt('how many grids do you want?',);
  for ( ; i <= 100; i++) {
    const div = document.createElement('div');
    cdiv.appendChild(div);
}}