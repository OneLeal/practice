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
   if (str.length < 2) return true
   let i = 0
   let j = str.length - 1
   while (i < j) {
      if (str[i] != str[j]) {
         return false
      }
       i++;
       j--;
   }
   return true
}

console.log(palindrome('32wxsxxw23'));