// const labels = document.querySelectorAll('.mini_header label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//         .join('')
// })

let trumpet =document.getElementById('trumpets')
let wrong_answers =document.getElementById('wrong_answer')
let crowd_cheers =document.getElementById('crowd_cheer')
let gasps =document.getElementById('gasp')
let rooster_crys =document.getElementById('rooster_cry')
let tadas =document.getElementById('tada')
let boos =document.getElementById('boo')

trumpet.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/success-fanfare-trumpets-6185.mp3");
    audio.play()
})
wrong_answers.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/buzzer-or-wrong-answer-20582.mp3");
    audio.play()
})
crowd_cheers.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/crowd-cheer-ii-6263.mp3");
    audio.play()
})
gasps.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/gasp-6253.mp3");
    audio.play()
})
rooster_crys.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/rooster-cry-173621.mp3");
    audio.play()
})
tadas.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/065492_tadawav-80833.mp3");
    audio.play()
})
boos.addEventListener('click', ()=> {
    let audio =new Audio("./Audio Sound/boo-36556.mp3");
    audio.play()
})