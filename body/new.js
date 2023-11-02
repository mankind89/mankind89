let input =document.getElementById('input')
let search =document.getElementById('search')

search.addEventListener('click', ()=> {
    if(input.style.display === 'block') {
        input.style.display = 'none'
        search.style.transform = 'translateX(-80px)'
    }else {
        input.style.display = 'block'
        search.style.transform = 'translateX(0px)'
    }
})
