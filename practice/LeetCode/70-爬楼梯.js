/**
 * @param {number} n
 * @return {number}
 */

// 暴力解法
var climbStairs = function (n) {
  var count = 0;
  var choose = [1, 2];
  function dfs(sum) {
    if (sum < n) {
      choose.forEach((num) => dfs(sum + num));
    } else sum === n && count++;
  }
  dfs(0);
  return count;
};

// 动态规划
var climbStairs = function (n) {
  var x1 = 0;
  var x2 = 1;
  var y = 1;

  for (var i = 0; i < n - 1; i++) {
    x1 = x2;
    x2 = y;
    y = x1 + x2;
  }
  return y;
};

console.log(climbStairs(5));
