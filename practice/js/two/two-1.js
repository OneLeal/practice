/**
 * 求数组中的最大值:
 * 给定一个数组，返回数组中的最大值，不能使用任何 js api;
 */

const arr = [1, 5, 16, 8, 6, 3];
const findMaxNumber = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]);
  }
  return max;
};

console.log(findMaxNumber(arr));
