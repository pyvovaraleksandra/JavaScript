//task 1
function isSubString (str) {
 	return /english/i.test(str);
 }
 
 var str = (prompt("Enter a string: "));
 var result = isSubString(str);
 console.log(result);


// task 2
function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function isSubString (string, subString) {
	return new RegExp(escapeRegExp(subString), 'i').test(escapeRegExp(string));
}

var str = (prompt("Enter a string: "));
var subStr = (prompt("Enter a substring for searching: "));
var result = isSubString(str, subStr);
console.log(result);


// task 3
function getWordsLength(string) {
	var words = [];
	var words = string.match( /[Ё-Яа-ёA-Za-z]+/g);
	return words.length;
}

var length = getWordsLength('RegExp это интересно :) Не смотря на 100500 вещей, которые мне непонятны.');
console.log(length);


//task 4
var string = "Привет   \n\t    мир!";
console.log(string);
string = string.replace(/[ \t\n]+/g, ' ');
console.log(string);


//task 5
var string = "Привет   \n\t    мир! Один, два, \n \t три.";
var words = string.split(/[ \t\n]+/);
console.log(words);