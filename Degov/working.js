let boxs = document.querySelectorAll('.box')
let nexts = document.getElementById('next')
let prevs = document.getElementById('prev')

let count = 0;
// let forward = true;
// let backward = false;

nexts.addEventListener('click', ()=> {
  count++;
  if(count > boxs.length -1) {
    count = boxs.length;
  }
  boxs.forEach((box, index)=> {
    if(index < count)
    box.classList.add('active')
  })
})

function myFunction() {
  count--;
  if(count < 0) {
    count = 0;
  }
  boxs.forEach((box, index) => {
    if(index > count) {
      box.classList.remove('active')
    }
  })
}
prevs.addEventListener('click', myFunction)





