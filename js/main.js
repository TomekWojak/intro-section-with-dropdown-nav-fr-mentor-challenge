
const burgerBtn = document.querySelector('.nav__burger-btn')
const navLinkMobileFirst = document.querySelector('.nav__mobile-li--first')
const navDropdownArrow = document.querySelector('.dropdown-arrow')
const navDropdownArrowScnd = document.querySelector('.dropdown-arrow--second')
const navLinkMobileSecond = document.querySelector('.nav__mobile-li--second')
const navDropdownLiFirst = document.querySelectorAll('.nav__mobile-li--first .nav__mobile-dropdown-li')
const navDropdownLiSecond = document.querySelectorAll('.nav__mobile-li--second .nav__mobile-dropdown-li')
const navMobile = document.querySelector('.nav__mobile')
const overlay = document.querySelector('.overlay')

burgerBtn.addEventListener('click', () => {
    const isOpened = burgerBtn.getAttribute('aria-expanded')

    if(isOpened === 'false') {
        burgerBtn.setAttribute('aria-expanded', 'true')
        burgerBtn.classList.add('active')
        navMobile.classList.add('collapsed')
        navMobile.setAttribute('aria-hidden', 'false')
        overlay.classList.add('visible')
    }else {
        burgerBtn.setAttribute('aria-expanded', 'false')
        burgerBtn.classList.remove('active')
        navMobile.classList.remove('collapsed')
        navMobile.setAttribute('aria-hidden', 'true')
        overlay.classList.remove('visible')
    }
})

navLinkMobileFirst.addEventListener('click', () => {
    navDropdownArrow.classList.toggle('rotated')
    navDropdownArrowScnd.classList.remove('rotated')
    navDropdownLiSecond.forEach(item => item.classList.remove('active'))
    let delayTime = 0
    navDropdownLiFirst.forEach(item => {
        item.classList.toggle('active')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
})

navLinkMobileSecond.addEventListener('click', () => {
    navDropdownArrow.classList.remove('rotated')
    navDropdownArrowScnd.classList.toggle('rotated')
    navDropdownLiFirst.forEach(item => item.classList.remove('active'))
    let delayTime = 0
    navDropdownLiSecond.forEach(item => {
        item.classList.toggle('active')
        item.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
})
