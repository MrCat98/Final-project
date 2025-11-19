import '../scss/style.scss'

console.log('It works!')
let swiperFirst = null
let swiperSecond = null
let swiperThird = null

function initSwipers() {
  if (window.innerWidth < 768 && !swiperFirst) {
    swiperFirst = new Swiper('.swiper-first', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--first',
        clickable: true
      }
    })
  } else if (window.innerWidth >= 768 && swiperFirst) {
    swiperFirst.destroy(true, true)
    swiperFirst = null
  }
  if (window.innerWidth < 768 && !swiperSecond) {
    swiperSecond = new Swiper('.swiper-second', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--second',
        clickable: true
      }
    })
  } else if (window.innerWidth >= 768 && swiperSecond) {
    swiperSecond.destroy(true, true)
    swiperSecond = null
  }
  if (window.innerWidth < 768 && !swiperThird) {
    swiperThird = new Swiper('.swiper-third', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper__pagination--third',
        clickable: true
      }
    })
  } else if (window.innerWidth >= 768 && swiperThird) {
    swiperThird.destroy(true, true)
    swiperSecond = null
  }
}

initSwipers()

window.addEventListener('resize', initSwipers)

// Находим элементы один раз
const modalButton = document.querySelector('.navigation__button--modal')
const modalWindow = document.querySelector('.modal')
const closeButton = document.querySelector('.headar__button--close')

// Клик на кнопку модалки
modalButton.addEventListener('click', () => {
  {
    modalWindow.style.display = 'block'
  }
})

// Клик на крестик закрытия
closeButton.addEventListener('click', () => {
  modalWindow.style.display = 'none'
})

const brandsBox = document.querySelector('.brands__wrapper')
const brandsButton = document.querySelector('.brands__button')
const brandsButtonText = document.querySelector('.brands__button__text')
const brandsButtonArrow = document.querySelector('.brands__button--arrow')

brandsButton.addEventListener('click', () => {
  brandsBox.classList.toggle('show-brands')
  brandsButton.classList.toggle('active')

  if (brandsBox.classList.contains('show-brands')) {
    brandsButtonText.textContent = 'Cкрыть'
    brandsButtonArrow.classList.add('rotate')
  } else {
    brandsButtonText.textContent = 'Показать все'
    brandsButtonArrow.classList.remove('rotate')
  }
})

const devicesBox = document.querySelector('.devices__wrapper')
const devicesButton = document.querySelector('.devices__button')
const devicesButtonText = document.querySelector('.devices__button__text')
const devicesButtonArrow = document.querySelector('.devices__button--arrow')

devicesButton.addEventListener('click', () => {
  devicesBox.classList.toggle('show-devices')
  devicesButtonText.classList.toggle('active')

  if (devicesBox.classList.contains('show-devices')) {
    devicesButtonText.textContent = 'Скрыть'
    devicesButtonArrow.classList.add('rotate')
  } else {
    devicesButtonText.textContent = 'Показать все'
    devicesButtonArrow.classList.remove('rotate')
  }
})

const secondText = document.querySelector('.content__text--second')
const tridthText = document.querySelector('.content__text--tridth')
const button = document.querySelector('.content__button--watch')
const buttonText = document.querySelector('.content__button--text')
const buttonArrow = document.querySelector('.content__button--icon')

  button.addEventListener('click', () => {
    const isHidden =
      secondText.style.display === '' || secondText.style.display === 'none'

    if (isHidden) {
      // ПОКАЗАТЬ
      secondText.style.display = 'inline'
      tridthText.style.display = 'inline'
      buttonText.textContent = 'Скрыть'
      buttonArrow.classList.add('rotate')
    } else {
      // СКРЫТЬ
      secondText.style.display = 'none'
      tridthText.style.display = 'none'
      buttonText.textContent = 'Читать далее'
      buttonArrow.classList.remove('rotate')
    }
  })
