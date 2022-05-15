/**
 * 删除所有字符:
 * 删除一个字符串中指定的所有字符;
 *
 * 例:
 * 输入: str = "I ate noodles in the afternoon.", char = 'n'
 * 输出: "I ate oodles i the afteroo."
 */

const delAllChar = function (str, char) {
    return str.split('').filter(item =>item != char).join(' ')
   

}


console.log(delAllChar('afternoon.', 'n'));