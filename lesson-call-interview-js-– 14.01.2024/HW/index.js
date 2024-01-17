/* ЗАДАЧА
Написати функцію яка буде на основі масиву з обʼєктами створювати розмітку у вигляді листів
Тобто, в середині листа потрібно відобразити наступну інформацію - subject, from, to.
Інформація властивості text, по замовчуванню невидно.
Потрібно зробити так, шоб при кліку на листа показувався дод. текст, при повторному кліку зникав */
// const mailStorage = [
// 	{
// 		subject: 'Hello world',
// 		from: 'gogidoe@somemail.nothing',
// 		to: 'lolabola@ui.ux',
// 		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
// 	},
// 	{
// 		subject: 'Hello Anton  ',
// 		from: 'gogidoe@somemail.nothing',
// 		to: 'lolabola@ui.ux',
// 		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
// 	},
// 	{
// 		subject: 'Hello Zhenya ',
// 		from: 'gogidoe@somemail.nothing',
// 		to: 'lolabola@ui.ux',
// 		text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
// 	},
// ];
// function creatingLetter(letter) {
// 	const letterWraper = document.createElement('div');
// 	letterWraper.className = 'letter-wrapper';

// 	const subject = document.createElement('h2');
// 	subject.className = 'letter-subject';
// 	subject.textContent = letter.subject;

// 	const from = document.createElement('p');
// 	from.className = 'from-subject';
// 	from.textContent = letter.from;

// 	const to = document.createElement('p');
// 	to.className = 'to-subject';
// 	to.textContent = letter.to;

// 	const textContainer = document.createElement('details');

// 	const textSummary = document.createElement('summary');
// 	textSummary.textContent = 'Open letter';

// 	const letterText = document.createElement('p');
// 	letterText.textContent = letter.text;

// 	textContainer.append(textSummary, letterText);
// 	letterWraper.append(subject, from, to, textContainer);

// 	document.body.append(letterWraper);
// }

// mailStorage.forEach((e) => {
// 	creatingLetter(e);
// });

/**********************************************************Завдання 1********************************************************************************************** */
// Завдання 1:
// Створіть HTML-елемент (наприклад, кнопку) з  id. За допомогою JavaScript додайте подію, яка реагує на наведення миші на цей елемент. При наведенні змініть колір тексту або фоновий колір елементу.
// function getRandomColor() {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }
// const btn = document.createElement('button');
// btn.id = 'btn';
// btn.style.backgroundColor = 'red';
// btn.style.padding = '10px 30px';
// btn.style.borderRadius = '10px';
// btn.textContent = 'Click me';

// document.body.append(btn);

// btn.addEventListener('mouseover', () => {
// 	btn.style.backgroundColor = getRandomColor();
// 	btn.style.color = getRandomColor();
// });

/**********************************************************Завдання 2********************************************************************************************** */
// Завдання 2:
// Створіть два HTML-елементи з id. Використовуючи JavaScript, додайте подію, яка реагує на клік на один з елементів. При кліку змініть вміст контенту іншого елементу.
// function getRandomColor() {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

// const btn = document.createElement('button');
// btn.id = 'btn';
// btn.style.backgroundColor = 'red';
// btn.style.padding = '10px 30px';
// btn.style.borderRadius = '10px';
// btn.textContent = 'Click me';

// const bloc = document.createElement('div');
// bloc.id = 'bloc';
// bloc.style.padding = '50px';
// bloc.style.border = '1px solid';
// bloc.textContent =
// 	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo dolorem atque voluptatem quod nulla necessitatibus similique sunt! Harum, totam consequatur quibusdam facere nesciunt, fuga natus fugiat laudantium libero blanditiis fugit. Impedit maiores repellendus dolores. Necessitatibus fuga quia aut. Dignissimos ipsum excepturi quos ipsam beatae, quo quia voluptas totam alias!';

// document.body.append(btn, bloc);

// btn.addEventListener('click', () => {
// 	bloc.style.color = getRandomColor();
// });
/**********************************************************Завдання 3********************************************************************************************** */
// Завдання 3. на використання події "submit" форми:
// Створіть HTML-форму з кнопкою "Submit". Використовуючи JavaScript, додайте подію, яка викликається при відправці форми. Виведіть в консоль вміст текстового поля форми.
// const form = document.getElementById('myForm');
// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	let information = document.getElementById('textInput').value;

// 	console.log('Text:', information);
// });
/**********************************************************Завдання 4********************************************************************************************** */
// Завдання 4. на використання події "change":
// Створіть HTML-елемент "select" із списком опцій. Використовуючи JavaScript, додайте подію, яка викликається при зміні вибору опції. Виведіть в консоль значення вибраної опції.
// const carsElement = document.getElementById('cars');

// carsElement.addEventListener('change', () => {
// 	let optionValue = carsElement.value;
// 	console.log('Вибрано авто марки : ' + optionValue);
// });

/**********************************************************Завдання 5********************************************************************************************** */
// Завдання 5. на використання події "mouseover" і "mouseout":
// Створіть HTML-елемент (наприклад, картинку) з заданим id. Використовуючи JavaScript, додайте події, які реагують на наведення миші на елемент ("mouseover") та виходження миші за межі елемента ("mouseout"). При наведенні змініть розмір або обертайте елемент, а при виході відновіть його початковий стан.
// const imgBag = document.getElementById('img-bag');
// imgBag.addEventListener('mouseover', () => {
// 	imgBag.className = 'rotate-image';
// });
// imgBag.addEventListener('mouseout', () => {
// 	imgBag.className = '';
// });
