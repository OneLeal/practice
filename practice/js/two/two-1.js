/**
 * 求数组中的最大值:
 * 给定一个数组，返回数组中的最大值，不能使用任何 js api;
 */

/**
 *
 * @param {array} arr
 * @returns
 */
const findMaxNumber = function (arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
     arr[i] > result &&(result = arr[i])
  }
  return result
};


// const findMaxNumber = function (arr) {
//    return arr.sort((a,b)=>b-a)[0]
// };

// const findMaxNumber = function (arr) {
//   return Math.max(...arr)
// };

// const findMaxNumber = function (arr) {
//  return arr.reduce((pre, val) => {
//    return  pre > val ? pre : val;
//  }, 0);
// };
const arr = [1, 5, 16, 8, 6, 3];
console.log(findMaxNumber(arr));




