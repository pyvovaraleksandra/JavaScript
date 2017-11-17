// task 1
function diffDate(date) {
	date = new Date(date);
	currentDate = new Date();

	hours = (currentDate - date)/3600000;
	hours = Math.round(hours);
	console.log(hours);

	if (hours > 0) {
		if (hours <= 2) {
			return "Сейчас " + hours + " час до текущего времени";
		}
		return "Осталось " + hours + " часов";
	} else {
		if (hours >= -2) {
			return "Сейчас " + Math.abs(hours) + " час от текущего времени";
		}
		return "Прошло " + Math.abs(hours) + " часов";
	}
}

var test = diffDate("11.18.2017 2:00");
console.log(test);
