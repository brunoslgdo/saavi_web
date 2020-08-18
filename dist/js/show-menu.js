const showMenu = (iconHamburguerId, navId) => {
	let iconHamburguer = document.getElementById(iconHamburguerId),
		nav = document.getElementById(navId);
	if(iconHamburguer && nav) {
		iconHamburguer.addEventListener('click', () => {
			iconHamburguer.classList.toggle('close');
			nav.classList.toggle('show');
		});
	}
}

showMenu('js-icon-hamburguer', 'js-nav');