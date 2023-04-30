const showPlant = (plantNumberId, cardNumberId, closeNumberId) => {

	let plantNumber = document.getElementById(plantNumberId),
		cardNumber = document.getElementById(cardNumberId),
		closeNumber = document.getElementById(closeNumberId)

	if(plantNumber && cardNumber) {
		plantNumber.addEventListener('click', () => {
			cardNumber.classList.toggle('cover')
			plantNumber.style.transform = 'scale(0, 0)'
		})
	}

	if(closeNumber && cardNumber) {
		closeNumber.addEventListener('click', () => {
			cardNumber.classList.toggle('cover')
			plantNumber.style.transform = 'scale(1, 1)'
		})
	}
}

showPlant('one', 'card-one', 'close-one')
showPlant('two', 'card-two', 'close-two')
showPlant('three', 'card-three', 'close-three')
showPlant('four', 'card-four', 'close-four')
showPlant('five', 'card-five', 'close-five')
showPlant('fiveDos', 'card-fiveDos', 'close-fiveDos')
showPlant('six', 'card-six', 'close-six')
showPlant('seven', 'card-seven', 'close-seven')
showPlant('sevenDos', 'card-sevenDos', 'close-sevenDos')
showPlant('eight', 'card-eight', 'close-eight')