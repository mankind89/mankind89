let times =document.getElementById('icon_times')
let bar =document.getElementById('icon_bar')
let imgs =document.getElementById('img')
let navigator =document.getElementById('navigator')

bar.addEventListener('click', ()=> {
    navigator.style.width = '200px';  
})
times.addEventListener('click', ()=> {
    navigator.style.width = '0'; 
})

imgs.addEventListener('mouseenter', ()=> {
    imgs.style.transform= 'scale(1.1)'
})

imgs.addEventListener('mouseleave', ()=> {
    imgs.style.transform= 'scale(1)'
})