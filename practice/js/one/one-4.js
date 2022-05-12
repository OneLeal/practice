/**
 * 判断平年 or 闰年:
 * 输入年份(yyyy)，判断是平年还是闰年?
 */

const isLeapYear = function (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

for (let i = 1996; i < 2022; i++) {
  const bool = isLeapYear(i);
  bool && console.log(i, bool);
}
