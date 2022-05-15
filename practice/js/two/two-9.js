/**
 * 判断回文:
 * 输入一个字符串，判断其是否是回文（字符串前后对称）;
 *
 * 例1:
 * 输入: str = "===336633==="
 * 输出: true
 *
 * 例2:
 * 输入: str = "beauty"
 * 输出: false
 *
 * 例3:
 * 输入: str = "399x993"
 * 输出: true
 */

const palindrome = function (str) {
  if (!str || typeof str !== "string") return false;

  let bool = true;
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    bool = str[i] === str[j];
    if (!bool) break;
  }
  return bool;
};

["===336633===", "beauty", "399x993", "1234331", ""].forEach((str) =>
  console.log(palindrome(str))
);
