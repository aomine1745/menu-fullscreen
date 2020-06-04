const nav = document.querySelector('.menu-overlay')
const toggleIcon = document.querySelector('.toggleIcon')

function menuToggle () {
	nav.classList.toggle('active')
	toggleIcon.classList.toggle('active')
}