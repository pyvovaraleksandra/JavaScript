// task 1. find substring
function isSubString (str) {
	str = str.toLowerCase();

	var subStr = "english";

	if (str.indexOf(subStr) != -1)
	{
		return true;
	} else {
		return false;
	}
}

var str = (prompt("Enter a string: "));
var result = isSubString(str);
console.log(result);


