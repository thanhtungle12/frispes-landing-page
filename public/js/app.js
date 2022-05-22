var iconMenu = document.querySelector('.icon-menu')
var overlay = document.querySelector('.overlay')
var btnClose = document.querySelector('.close-btn')

iconMenu.addEventListener('click', function () {
    overlay.classList.toggle('hide')
})
btnClose.addEventListener('click', function () {
    overlay.classList.toggle('hide')
})
overlay.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        overlay.classList.toggle('hide')
    }
})