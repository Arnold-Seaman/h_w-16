// a. Возраст

// первый способ:
age = +prompt('Введите свой возраст');
if(age > 0 && age <= 18){
	alert('Вы еще молоды, вам нужно учиться')
} else if(age > 18 && age <= 50){
	alert('Вам нужно работать')
} else if(age > 50 && age <= 59){
	alert('Вам скоро на пенсию')
} else if(age > 59 && age <= 100){
	alert('Вы пенсионер')
} else {
	alert('Что-то пошло не так')
};

// второй способ:
/* age = +prompt('Введите свой возраст');
let message = (age > 0 && age <= 18) ? alert('Вы еще молоды, вам нужно учиться') : (age > 18 && age <= 50) ? alert('Вам нужно работать') : (age > 50 && age <= 59) ? alert('Вам скоро на пенсию') : (age > 59 && age <= 100) ? alert('Вы пенсионер') : alert('Что-то пошло не так'); */

// третий способ:
/* age = +prompt('Введите свой возраст');
switch (true) {
	case age > 0 && age <= 18:
	alert('Вы еще молоды, вам нужно учиться')
		break;
	case age > 18 && age <= 50:
	alert('Вам нужно работать')
		break;
	case age > 50 && age <= 59:
	alert('Вам скоро на пенсию')
		break;
	case age > 59 && age <= 100:
	alert('Вы пенсионер')
		break;
	default:
	alert('Что-то пошло не так')
		break;
}; */

// b. Время
var time = +prompt('Введите время в цифрах');
switch (true) {
	case time >= 0 && time <= 6 :
		alert(`${time} часов ночи`)
		break;
	case time >= 7 && time <= 10 :
		alert(`${time} часов утра`)
		break;
	case time >= 11 && time <= 17 :
		alert(`${time} часов дня`)
		break;
	case time >= 18 && time <= 23 :
		alert(`${time} часов вечера`)
		break;
	default:
	alert('Что-то пошло не так');
	console.log(time);
		break;
};

// c. Среднее число
var a = prompt('Введите первое число');
var b = prompt('Введите второе число');
var c = prompt('Введите третье число');
let result = (a < b && b < c) ? alert(b) : (b < a && a < c) ? alert(a) : alert(c);

