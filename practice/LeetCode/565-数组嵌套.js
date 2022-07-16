/**
 * @param {number[]} nums
 * @return {number}
 */

// 利用对象 key 的唯一性
var arrayNesting = function (nums) {
  var len = 0;
  var collect = {};

  for (var i = 0; i < nums.length; i++) {
    if (collect[nums[i]] == null) {
      var count = 0;
      var temp = nums[i];
      while (collect[temp] == null) {
        collect[temp] = true;
        count++;
        temp = nums[temp];
      }
      len = Math.max(len, count);
    }
  }

  return len;
};

// 原地标记法
var foo = function (nums) {
  var len = nums.length;
  var result = 0;

  for (var i = 0; i < len; i++) {
    var count = 0;
    while (nums[i] < len) {
      var temp = nums[i];
      count++;
      nums[i] = len;
      i = temp;
    }
    result = Math.max(result, count);
  }
  return result;
};

var arr = [5, 4, 0, 3, 1, 6, 2];
var result = foo(arr);
console.log("result: ", result);
