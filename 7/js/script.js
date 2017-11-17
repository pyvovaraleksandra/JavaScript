// task 1
function diffDate(date) {
	date = new Date(date);
	currentDate = new Date();

	hours = (currentDate - date)/3600000;
	hours = Math.round(hours);

	if (hours > 0) {
		if (hours <= 2) {
			return "Сейчас " + hours + " час от текущего времени";
		}
		return "Прошло " + hours + " часов";
	} else {
		if (hours >= -2) {
			return "Сейчас " + Math.abs(hours) + " час до текущего времени";
		}
		return "Осталось " + Math.abs(hours) + " часов";
	}
}

var date = prompt("enter date:");
date = diffDate(date);
console.log(date);


//task 2
function getMonth(month) {
	if (month > 12 || month < 1) {
		throw new RangeError("Число некорректно");
	}
	var months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
	return months[month-1];
}

try {
	monthName = getMonth(0);
} catch (e) {
	monthName = undefined;
}
console.log(monthName);