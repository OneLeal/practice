/**
 * 删除所有字符:
 * 删除一个字符串中指定的所有字符;
 *
 * 例:
 * 输入: str = "I ate noodles in the afternoon.", char = 'n'
 * 输出: "I ate oodles i the afteroo."
 */

const delAllChar = function (str, char) {
  return str
    .split("")
    .filter((c) => c !== char)
    .join("");
};

const delAllCharAnother = function (str, char) {
  let index = 0;
  while (str.indexOf(char, index) > -1) {
    index = str.indexOf(char, index);
    str = str.slice(0, index) + str.slice(index + 1);
  }
  return str;
};

const delAllCharorigin = function (str, char) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== char && (result += str[i]);
  }
  return result;
};

let str = "I ate noodles in the afternoon.";
let char = "n";

console.log(delAllChar(str, char));
console.log(delAllCharAnother(str, char));
console.log(delAllCharorigin(str, char));
