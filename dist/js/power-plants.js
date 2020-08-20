let hide = document.querySelector('.card-power-plants__caption'),
    show = document.querySelector('.card-power-plants__content'),
    back = document.querySelector('.icon-close')

hide.addEventListener('click', () => {
	hide.style.transform = 'scale(0, 0)'
})

hide.addEventListener('click', () => {
	show.style.transform = 'scale(1, 1)'
})

back.addEventListener('click', () => {
	show.style.transform = 'scale(0, 0)'
	hide.style.transform = 'scale(1, 1)'
})