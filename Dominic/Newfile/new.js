let navigators = document.querySelectorAll('.navigator')

navigators.forEach(navigator=> {
    navigator.addEventListener('click', ()=> {
        removeList()
        navigator.classList.add('active')
    })
})

function removeList() {
    navigators.forEach(navigator=> {
       navigator.classList.remove('active')
    })
}




