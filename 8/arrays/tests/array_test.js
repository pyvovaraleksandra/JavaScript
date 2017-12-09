var
  assert = chai.assert,
  expect = chai.expect;

function testOnArray(object, methodName) {
  expect(object[methodName].bind(object, 'fewfqew')).to.throw(Error);
}

var array, clone;

describe("Check tasks for array and object", function () {

  describe("1. isArray(array)", function () {
    it("should return true if argument is array", function () {
      assert.equal(arrays.isArray([1, 3, 5, 6]), true);
    });

    it("should return false if argument is string", function () {
      assert.equal(arrays.isArray('jqkrbgkwegewr'), false);
    });

    it("should return false if argument is object", function () {
      assert.equal(arrays.isArray({1: 2}), false);
    });

    it("should return true if argument empty array", function () {
      assert.equal(arrays.isArray([]), true);
    });

  });




  describe("2. cloneArray(array)", function () {

    beforeEach(function () {
      array = [1, 2, 3, 4, 5];
      clone = arrays.cloneArray(array);
    });

    it("should return error if send not array", function () {
      testOnArray(arrays, "cloneArray");
    });

    it("should return array with the same length as a pass array", function () {
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone array and not change original", function () {
      clone.push(6);
      expect(array.length).to.not.equal(clone.length);
    });

    it("should return array clone with nested array", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      expect(array.length).to.equal(clone.length);
    });

    it("should change clone nested array and not change original nested", function () {
      array = [1, 2, 3, [4, 5]];
      clone = arrays.cloneArray(array);
      clone[3].push(6);
      expect(array[3].length).to.not.equal(clone[3].length);
    });

  });




  describe("3. removeFalse(array)", function () {

    it("should return error if send not array", function () {
      testOnArray(arrays, "removeFalse");
    });

    it("should remove 'null', '0', '', 'false', 'undefined' and 'NaN' values from an array.", function () {
      var cleanedArray = arrays.removeFalse([NaN, 0, 15, false, -22, '',undefined, 47, null]);
      expect(cleanedArray).to.deep.equal([15, -22, 47]);
    });
  });



  describe("4. join(array, separator)", function () {
    it("should return error if argument not array", function () {
      testOnArray(arrays, "join");
    });

    it("should return string without separator on the end", function () {
      array         = [1, 2, 3, 4];
      var separator = ';';
      var result    = arrays.join(array, separator);
      expect(result[result.length - 1]).to.not.equal(separator);
    });

    it("should join array with + separator", function () {
      array         = ["Red", "Green", "White", "Black"];
      var separator = '+';
      var testJoin  = array.join('+');
      var result    = arrays.join(array, separator);
      expect(result).to.equal(testJoin);
    });

    it("should join array with , separator if second argument not pass", function () {
      array      = ["Red", "Green", "White", "Black"];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });

    it("should join array with any data inside", function () {
      array      = ["Red", 3522, {1: 35235}, true, undefined, null, '', NaN, 0, false];
      var join   = array.join(',');
      var result = arrays.join(array);
      expect(result).to.equal(join);
    });
  });




  describe("5. sort(number)", function () {
    it("should return error if first argument not a number", function () {
      expect(arrays["sort"].bind(arrays, "fekjfvj")).to.throw(Error);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [32, 2, 362, 36, 23, 63, 41, 347, 381, 3, 7, 83, 2, 1];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return correct array with numbers inside without negative numbers', function () {
      var number  = [-32, 2, 362, -6, 23, 63, -25, 347, 381, -3, 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with string and it must be same with array after common sort method', function () {
      var number  = [-32, 2, "adwwherh", -6, 23, "oiurege", -25, 347, 381, "mvtey", 7, 83, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });

    it('should return array with different type of elements', function () {
      var number  = [-32, 2, "adwwherh", true, 23, null, -25, {"ew": 525}, 381, "mvtey", 7, undefined, 2, -2];
      var result  = arrays.sort(number);
      var correct = number.sort(function (a, b) {
        return a - b;
      });
      expect(result).to.equal(correct);
    });
  });





  describe("6. swapLetter()", function () {
    it("should return error if first argument not a string", function () {
      expect(arrays["swapLetter"].bind(arrays, 235234)).to.throw(Error);
    });

    it("should return mY nUMBER mORE tHAN yOUR", function () {
      var string = "My Number More Than Your";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('mY nUMBER mORE tHAN yOUR')
    });

    it("should return My Number More Than Your", function () {
      var string = "mY nUMBER mORE tHAN yOUR";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number More Than Your')
    });

    it("should return My Number552 More123 Than Your22", function () {
      var string = "mY nUMBER552 mORE123 tHAN yOUR22";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('My Number552 More123 Than Your22')
    });

    it("should return abcdefghijklmnopqrstuvwxyz", function () {
      var string = "abcdefghijklmnopqrstuvwxyz";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });

    it("should return ABCDEFGHIJKLMNOPQRSTUVWXYZ", function () {
      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = arrays.swapLetter(string);
      expect(result).to.equal('abcdefghijklmnopqrstuvwxyz')
    });
  });

});