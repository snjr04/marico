let burger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__menu')

burger.onclick = function () {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')

}