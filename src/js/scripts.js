import {WOW} from './wow'
import Swiper from '../../node_modules/swiper/swiper-bundle'

// Buttons for language changing
const languageBtns = document.querySelectorAll('.languages__btn')

languageBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		languageBtns.forEach(btn => {
			btn.classList.remove('languages__btn--active')
		})
		btn.classList.add('languages__btn--active')
	})
})

// Menu link active

const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuLinks.forEach(link => {
			link.classList.remove('menu__link--active')
		})
		link.classList.add('menu__link--active')
	})
})

// Floating header

const header = document.querySelector('.header')

if (!header.classList.contains('header--fixed')) {
	window.addEventListener('scroll', () => {
		header.classList.toggle('header--fixed', window.scrollY > 5)
	})
}

// Burger menu

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const languages = document.querySelector('.header__languages')
const body = document.body

burger.addEventListener('click', () => {
	burger.classList.toggle('header__burger--active')
	menu.classList.toggle('menu--active')
	languages.classList.toggle('languages--active')
	body.classList.toggle('body--lock')
})

// Closing burger when clicking on menu link
menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		setTimeout(() => {
			burger.classList.remove('header__burger--active')
			menu.classList.remove('menu--active')
		}, 500)
	})
})

// Smooth scrolling to anchor

const anchors = document.querySelectorAll('.anchor')

for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
	e.preventDefault()
	
	const blockID = anchor.getAttribute('href').substr(1)
	
	document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
})
}

// WOW JS

const wow = new WOW(
	{
		mobile:false,
		live: false
	}
)

wow.init();



// News item page slider
const newsSlider = new Swiper('.description-slider__container', {
	wrapperClass: 'description-slider__wrapper',
	slideClass: 'description-slide',
	navigation: {
		nextEl: '.description-slider__btn-next',
		prevEl: '.description-slider__btn-prev',
	},
})

