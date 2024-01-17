let menuItem = document.querySelectorAll('.menu-item');
let contentItem = document.querySelectorAll('.content-item');
let menu = document.querySelector('.menu');
menu.addEventListener('click', (event) => {
	if (event.target !== event.currentTarget) {
		console.log(event.target);
		menuItem.forEach((item) => {
			item.classList.remove('active');
		});
		event.target.classList.add('active');
		contentItem.forEach((e) => {
			if (event.target.dataset.section === e.dataset.section) {
				e.classList.add('active-content');
			} else {
				e.classList.remove('active-content');
			}
		});
	}
});

/******************************/
