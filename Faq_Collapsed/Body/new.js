let boxs =document.getElementById('box')
let icons =document.querySelectorAll('#icon')
let texts =document.getElementById('text')

let istoggled =false;
icons.forEach(icon=> {
    icon.addEventListener('click', toggle)
})
function toggle(e) {
let element =e.target;
boxs =element.parentElement;
texts=element.previousElementSibling;

function untoggled() {
boxs.style.background= 'white';
texts.style.display ='block';
element.classList.add("fa-times")
element.classList.remove("fa-chevron-down")
istoggled =false
}

function retoggled() {
    boxs.style.background= 'none';
    texts.style.display ='none';
    element.classList.remove("fa-times")
    element.classList.add("fa-chevron-down") 
    istoggled= true
}

if(istoggled) {
    untoggled()
}else {
    retoggled()
}

}