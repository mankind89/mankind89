let box_1 =document.getElementById('box_1')
let box_2 =document.getElementById('box_2')

box_1.addEventListener('mouseenter', ()=> {
    box_1.style.width = '90%';
    box_1.style.transition ='1s ease'
    box_1.style.transform='scale(1.1)';
    box_2.style.width = '30%';
})
box_1.addEventListener('mouseleave', ()=> {
    box_2.style.width = '90%';
    box_1.style.transition ='1s ease'
    box_1.style.transform='scale(1)';
    box_1.style.width = '30%';
})

