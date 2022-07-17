/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 位运算
var addBinary = function (a, b) {
  var arr1 = a.split("").reverse();
  var arr2 = b.split("").reverse();
  var bit = 0;
  var sum = "";
  var add;

  var len = Math.max(arr1.length, arr2.length);
  for (var i = 0; i < len; i++) {
    var add = +(arr1[i] || 0) + +(arr2[i] || 0) + bit;
    bit = 0;
    add > 1 && (bit = 1);
    add % 2 === 0 ? (add = 0) : (add = 1);
    sum = add + sum;
  }

  bit === 1 && (sum = bit + sum);
  return sum;
};

// 逻辑运算
var foo = function (a, b) {
  var sum = parseInt(a, 2) + parseInt(b, 2);
  var temp;
  var arr = [];

  while (sum > 0) {
    temp = sum % 2;
    arr.push(temp);
    sum = (sum - temp) / 2;
  }

  return arr.reverse().join("");
};

var a = "101101";
var b = "11001";
var sum = foo(a, b);
console.log("sum: ", sum);
