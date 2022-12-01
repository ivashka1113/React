"use strict";

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];

for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() != '') {
		command.push(employers[i]);
	}
}

for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (...args) => {
	let total = 0;
	args.forEach((arg) => {
		total += +arg;
	})

	return total;
};

const lesson = calcCash(...data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	console.log(director, teacher, allModule, gang, course)
	teacher = teacher || 'Максим';
	const sumTech = `${data.react},${data.add} и другие...`;
	console.log(`Стартуем новый курс: '${course}'. Владелец: '${director}', преподаватель: '${teacher}'. Всего уроков: '${allModule}'. \nКоманда Академии: '
		${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(sumTech);

}
makeBusiness('Артем', null, lesson, ...[command], nameCourse);