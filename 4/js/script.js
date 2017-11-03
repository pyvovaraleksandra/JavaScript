//array
console.log("--------------------------------TASK 1-------------------------------------");
var N = +(prompt("Enter a number"));
var arr = [];
for(var i = 0; i < 100; i++) {
	arr[i] = N;
	N++;
}
console.log("Четные:");
for(var i = 0; i < 100; i++) {
	if (arr[i] % 2 == 0) {
		console.log(arr[i]);		
	}
}
console.log("Четные:");
for(var i = 0; i < 100; i++) {
	if (arr[i] % 2 != 0) {
		console.log(arr[i]);		
	}
}


//object
console.log("--------------------------------TASK 2-------------------------------------");
var obj = {
	Minsk: 'Belarus',
  	Kiev: 'Ukraine',
  	London: 'United Kingdom',
  	Pyongyang: 'North Korea',
  	Brasilia: 'Brazil'
}
for(var key in obj) {
    console.log(key + "is the capital of " + obj[key] );
}


//forEach
console.log("--------------------------------TASK 3-------------------------------------");
function forEach (array, method) {
	// console.log(arguments);
	for(var key in array) {
		method(array[key], key, array);
	}
}
arr = [3, 4, 5, 8];
forEach(arr, console.log); // alert is possible too


//map
console.log("--------------------------------TASK 4-------------------------------------");
function map (array, operation) {
	var resArr = [array.length];
	for (var i = 0; i < array.length; i++) {
		resArr[i] = operation(array[i]);
	}
	return resArr;
}
var arr = [4, 9, 81];
var sqrtArr =  map(arr, Math.sqrt);
console.log(sqrtArr);

var arr2 = [-7, 8, 4, -5];
var absArr =  map(arr2, Math.abs);
console.log(absArr);


