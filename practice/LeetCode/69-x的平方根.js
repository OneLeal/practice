/**
 * @param {number} x
 * @return {number}
 */

// 二分查找
var mySqrt = function (x) {
  var min = 0;
  var max = x;
  var mid, temp;

  if (x === 1 || x === 0) return x;
  while (max - min !== 1) {
    mid = Math.floor((min + max) / 2);
    temp = mid * mid;
    if (temp === x) {
      return mid;
    } else if (temp > x) {
      max = mid;
    } else {
      min = mid;
    }
  }
  return min;
};

console.log("x: ", mySqrt(8));
