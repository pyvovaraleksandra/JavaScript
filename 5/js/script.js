// task 2. expanded function
// function isSubString (string, subString) {
// 	string = string.toLowerCase();
// 	subString = subString.toLowerCase();

// 	if (string.indexOf(subString) != -1)
// 	{
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// var str = (prompt("Enter a string: "));
// var subStr = (prompt("Enter a string for searching: "));
// var result = isSubString(str, subStr);
// console.log(result);


// task 3
// function generateRange(min, max, step) {
// 	if (min >= max || step <= 0)
// 		return false;

// 	var result = [];
// 	for (var i = min; i <= max; i = i+step) {
// 		result.push(i);
// 	}

// 	return result;
// }

// var arr = generateRange(1, 7, 1);
// console.log(arr);


// task 4
function cutIt(stringArray) {
	var result = [];
	var minLength = stringArray[0].length;
	for (var i = 0; i < stringArray.length; i++) {
		if (stringArray[i].length < minLength)
			minLength = stringArray[i].length;
	}
	for (var i = 0; i < stringArray.length; i++) {
		result[i] = stringArray[i].substr(0,minLength);
	}
	return result;
}

console.log(cutIt(["codewars","javascript","java"]));
