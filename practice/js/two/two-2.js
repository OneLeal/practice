/**
 * 字符串反转:
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 进阶: 尝试只使用 for 和 if 解题。
 *
 * 例:
 * 输入: str = "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 */

const reverseWords = function (str) {
  return str.split("").reverse().join("");
};

const reverseWordsHard = function (str) {
  let result = "";
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    result += str[j];
  }
  return result;
};

const str = "Let's take LeetCode contest";
console.log(reverseWords(str));
console.log(reverseWordsHard(str));
