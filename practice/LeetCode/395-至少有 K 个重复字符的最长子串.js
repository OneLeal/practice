/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 暴力解法
var longestSubstring = function (s, k) {
  var prev = 0;
  var rear;
  var result = 0;
  var flag = false;
  var temp = "";

  for (; prev <= s.length - k; prev++) {
    rear = s.length;
    for (; rear >= prev + k; rear--) {
      if (rear - prev >= result) {
        temp = s.slice(prev, rear);
        var data = {};
        for (var i = 0; i < temp.length; i++) {
          data[temp[i]] ? data[temp[i]]++ : (data[temp[i]] = 1);
        }
        flag = Object.values(data).every((num) => num >= k);
        if (flag) {
          result = Math.max(result, temp.length);
          break;
        }
      }
    }
  }

  return result;
};

// 暴力解法(优化: 滑动窗口)
var foo = function (s, k) {
  var result = 0;
  var prev; // 左边界
  var rear; // 右边界
  var less; // 当前滑动窗口内小于 k 次的字符数
  var type; // 当前滑动窗口内的字符种类数
  var temp; // 字符收集器
  var key;

  // 遍历子串中出现字符种类数的所有场景
  for (var i = 1; i <= 26; i++) {
    temp = {};
    prev = rear = less = type = 0;

    while (rear < s.length) {
      key = s[rear];
      temp[key] ? temp[key]++ : (temp[key] = 1);
      temp[key] === 1 && (type++, less++);
      temp[key] === k && less--;

      while (type > i) {
        key = s[prev];
        temp[key]--;
        temp[key] === k - 1 && less++;
        temp[key] === 0 && (type--, less--);
        prev++;
      }

      !less && (result = Math.max(result, rear - prev + 1));
      rear++;
    }
  }

  return result;
};

// 分治法
var fn = function (s, k) {
  var dfs = function (str, prev, rear, k) {
    var count = 0;
    var collect = {};
    var split, index;

    // 子串字符计数
    for (var i = prev; i <= rear; i++) {
      var key = str[i];
      collect[key] ? collect[key]++ : (collect[key] = 1);
    }

    // 选出不合要求的字符
    var arr = Object.keys(collect);
    for (var i = 0; i < arr.length; i++) {
      if (collect[arr[i]] < k) {
        split = arr[i];
        break;
      }
    }

    // 所有字符均符合要求则返回子串长度
    if (!split) {
      return rear - prev + 1;
    }

    // 开使递归分治
    index = prev;
    while (index <= rear) {
      index <= rear && s[index] === split && index++;
      if (index > rear) break;

      var start = index;
      while (index <= rear && s[index] !== split) {
        index++;
      }
      count = Math.max(count, dfs(s, start, index - 1, k));
    }

    return count;
  };
  return dfs(s, 0, s.length - 1, k);
};

var s = "aaaaaaaaabbbcccccddddd";
var k = 5;
var len = longestSubstring(s, k);
console.log("len: ", len);
