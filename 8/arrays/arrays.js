(function(exports) {
  "use strict";

  /*
   1. Write a JavaScript function to check whether an `input` is an array or not.
   Test Data :
   console.log(isArray('w3resource'));
   console.log(isArray([1, 2, 4, 0]));
   false
   true
   */
  function isArray(item) {
    return item instanceof Array;
  }

  /*
   2. Write a JavaScript function to clone an array.
   Test Data :
   console.log(cloneArray([1, 2, 4, 0]));
   console.log(cloneArray([1, 2, [4, 0]]));
   var newArray = cloneArray('Not an Array');
   [1, 2, 4, 0]
   [1, 2, [4, 0]]
   Error: Only Arrays allowed!
   */
  function cloneArray(array) {
  //   if (!isArray(array)) {
  //     throw new Error('Error: Only Arrays are allowed!');
  //   }
  //   var clonedArr = [];
  //   for (var i = 0; i < array.length; i++) {
  //     if (isArray(array[i]))
  //       cloneArray(array[i]);

  //     clonedArr.push(array[i]);
  //   }
  //   return clonedArr;
  // }
    if (!isArray(array)) {
      throw new Error ('Error: Only Arrays are allowed!');
    }

    var clone = array.slice();

    for (var i = 0; i < clone.length; i++) {
      clone[i] = (isArray(clone[i])) ? cloneArray(clone[i]) : clone[i];
    }

    return clone; 
  }




  /*
   3. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
   Sample array : 'Not array'
   Expected result : Error: Only Arrays allowed!
   Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
   Expected result : [15, -22, 47]
  */
  function removeFalse(array) {
    if (!isArray(array)) {
      throw new Error('Error: Only Arrays are allowed!');
    }

    var newArray = [];
    for (var i = 0; i <= array.length-1; i++) {
      if (!!array[i] !== false) {
        console.log(i + " " + array[i]);
        newArray.push(array[i]);
      }
    }
    return newArray;
  }




  /*
   1. Write a simple JavaScript program to join all elements of the following array into a string.
   Set second argument as choisen separator (e.g. - ";" , "," , "+"). By default must be ",".
   Sample array : myColor = ["Red", "Green", "White", "Black"];
   Expected Output :
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"
   */
  function join(array, separator) {
    if (!isArray(array)) {
        throw new Error('Error: Only Arrays are allowed!');
    }

    var rezStr = "";
    for (var i = 0; i <= array.length-1; i++) {
      if (typeof array[i] === "undefined" || array[i] === null) {
         rezStr += "";
      } else {
        rezStr += array[i];
      }

      if (separator) {
        if (i != array.length-1) {
          rezStr += separator;
        } 
      } else {
        if (i != array.length-1) {
          rezStr += ",";
        } 
      } 
    }
    return rezStr;
  }

  /*
   2. Write a JavaScript program to sort the items of an array.
   Sample array : var arr1 = [9, 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
   Sample Output : -4,-3,1,2,3,5,6,7,8
   */
  function sort(array) {
    var buf;

    for (var j = 0; j < array.length-1; j++)
      for (var i = 0; i < array.length-j; i++) {
        if (array[i] > array[i+1]) {
          buf = array[i];
          array[i] = array[i+1];
          array[i+1] = buf;
        }
      }

    return array;
  }






    var posArr = [];

    // for (var i = 0; i < array.length; i++) {
    //   if (array[i] >= 0) {
    //     posArr.push(array[i])
    //   }
    // }
  /*
   3. Write a JavaScript program which accept a string as input and swap the case of each character.
   For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   */
  function swapLetter(string) {

    if (typeof string !== "string") {
      throw new Error('Error: Only strings are allowed!');
    }
    var newString = "";

    for (var i = 0; i < string.length; i++) {
      if (string[i] == string[i].toUpperCase()) {
        newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
    }
    return newString;
    

  }

  exports.arrays = {
    isArray              : isArray,
    cloneArray           : cloneArray,
    removeFalse          : removeFalse,
    join                 : join,
    sort                 : sort,
    swapLetter           : swapLetter
  };
})(this);
