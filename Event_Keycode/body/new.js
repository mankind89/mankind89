let keys =document.getElementById('key')
let keyC =document.getElementById('keyCode')
let code =document.getElementById('code')


function keyboard(e) {
  keys.innerHTML =e.key;
  keyC.innerHTML=e.keyCode ;
  code.innerHTML=e.code ;
}

document.addEventListener('keypress', keyboard)
