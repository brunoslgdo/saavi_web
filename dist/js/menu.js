const showMenu = (hamburguerId, menuId) => {
	const hamburguer = document.getElementById(hamburguerId),
		  menu = document.getElementById(menuId);
	// existen ¿?
	if(hamburguer && menu) {
		hamburguer.addEventListener('click', () => {
			menu.classList.toggle('show');
		});
	}
}

const closeMenu = (closeId, menuId) => {
	const close = document.getElementById(closeId),
		  menu = document.getElementById(menuId);
	// existe ¿?
	if(close && menu) {
		close.addEventListener('click', () => {
			menu.classList.toggle('show');
		})
	}
}

showMenu('js-hamburguer', 'js-menu');
closeMenu('js-close', 'js-menu');