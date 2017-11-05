// task 2. expanded function
function isSubString (string, subString) {
	string = string.toLowerCase();
	subString = subString.toLowerCase();

	if (string.indexOf(subString) != -1)
	{
		return true;
	} else {
		return false;
	}
}

var str = (prompt("Enter a string: "));
var subStr = (prompt("Enter a string for searching: "));
var result = isSubString(str, subStr);
console.log(result);


