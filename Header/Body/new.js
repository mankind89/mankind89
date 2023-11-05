let boxs =document.querySelectorAll('.box')

window.addEventListener('scroll', update)
update()

function update() {
    let height =window.innerHeight / 5 * 4
    boxs.forEach(box => {
        let rect =box.getBoundingClientRect().top
        if(rect < height) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
    })
}