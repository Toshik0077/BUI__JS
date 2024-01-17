// Задача 1
// Використовуючи JavaScript, зробіть так, щоб при кліці на кнопку зникав елемент з id=hide
// const btnClick = document.querySelector('.btn');
// const content = document.getElementById('hide');
// btnClick.addEventListener('click', (e) => {
// 	content.remove();
// });
// Задача 2
// Створіть кнопку, при кліку на яку, вона буде приховувати сама себе
// const btnClick = document.querySelector('.btn');
// btnClick.addEventListener('click', () => {
// 	btnClick.style.display = 'none';
// });
// Задача 3
// Реалізуйте можливість виводу повідомлення, коли користувач наводить мишу на певний елемент сторінки
// const btnClick = document.querySelector('.btn');
// btnClick.addEventListener('mouseover', () => {
// 	alert('Миша наведена на елемент!');
// });
// Задача 4
// Розробіть програму, яка реагує на зміну розмірів вікна браузера та виводить повідомлення з новими розмірами.
// const displayWindow = () => {
// 	let width = window.innerWidth;
// 	let height = window.innerHeight;

// 	alert('Ширина вікна: ' + width + ', Висота вікна: ' + height);
// };
// window.addEventListener('resize', displayWindow);
// Задача 5
// Створіть обробник подій для подвійного кліку миші на фоні сторінки, що змінює колір фону на випадковий.
// function getRandomColor() {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }
// const displayWindowColor = () => {
// 	window.addEventListener('dblclick', () => {
// 		document.body.style.backgroundColor = getRandomColor();
// 	});
// };
// displayWindowColor();
