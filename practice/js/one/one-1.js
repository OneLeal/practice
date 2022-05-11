/**
 * 三位数组合:
 * 有 1、2、3、4 四个数字，能组成多少个互不相同且无重复数字的三位数，都是多少？
 */

const arr = [1, 2, 3, 4];

// 嵌套循环遍历每一位，筛选出不同的数
const threeBitNumber = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] !== arr[j] && arr[i] !== arr[k] && arr[j] !== arr[k]) {
          result.push(`${arr[i]}${arr[j]}${arr[k]}`);
        }
      }
    }
  }
  return result;
};

// 使用递归进行遍历
const threeBitNumberCycle = function (arr) {
  const result = [];

  const cycle = function (num, arr) {
    if (num.length === 3) {
      result.push(num.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        const temp = [].concat(num); // 深拷贝上一次选出的数
        const list = arr.filter(num => arr[i] !== num); // 获取剩余的数
        temp.push(arr[i]); // 选择当前遍历到的数
        cycle(temp, list);
      }
    }
  };

  cycle([], arr);
  return result;
};

console.log("三位数组合: ", threeBitNumber(arr));
console.log("三位数组合: ", threeBitNumberCycle(arr));
