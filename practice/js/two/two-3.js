/**
 * 寻找单数:
 * 数组中有 2n + 1 个数，其中 2n 个数两两相同，寻找剩下的单数;
 *
 * 例:
 * 输入: [2, 3, 6, 3, 6, 1, 1]
 * 输出: 2
 */

const arr = [2, 3, 6, 3, 6, 2, 1, 2, 1, 2, 5];
const findSingleNum = function (arr) {
  const data = {};
  let number = null;
  arr.forEach((num) => (data[num] ? data[num]++ : (data[num] = 1)));
  for (let key in data) {
    data[key] % 2 === 1 && (number = key);
  }
  return number;
};

console.log(findSingleNum(arr));
