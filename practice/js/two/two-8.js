/**
 * 删除所有字符:
 * 删除一个字符串中指定的所有字符;
 *
 * 例:
 * 输入: str = "I ate noodles in the afternoon.", char = 'n'
 * 输出: "I ate oodles i the afteroo."
 */

const delAllChar = function (str, char) {
   let strArr = str.split(' ')
   let result = []
   for (let i = 0; i < strArr.length; i++) {
    let a = strArr[i].split('').filter(item => {
        return item != char;
    })
      result.push(a.join(''));
   }
   return result.join(' ').trim();

};

console.log(delAllChar('n nI ate noodles in the afternoon. n', 'n'));
