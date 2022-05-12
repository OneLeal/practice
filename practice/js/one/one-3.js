/**
 * 计算活了多少天:
 * 输入生日(yyyy-mm-dd)，计算从出生到现在一共过了多少天？
 */

const calcDays = function (date = "") {
  let sum = 0;
  const [year, month, day] = date.split("-");
  const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  const bigMonth = [1, 3, 5, 7, 8, 10, 12];
  const smallMonth = [4, 6, 9, 11];
  const monthMap = new Map();

  monthMap.set(bigMonth, 31);
  monthMap.set(smallMonth, 30);

  for (let i = 1; i < +month; i++) {
    bigMonth.includes(i) && (sum += monthMap.get(bigMonth));
    smallMonth.includes(i) && (sum += monthMap.get(smallMonth));
    i === 2 && (isLeap ? (sum += 29) : (sum += 28));
  }

  return (sum += +day);
};

const aliveDays = function (birth) {
  let sum = 0;
  const [year] = birth.split("-");
  const date = new Date();
  const str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const birthDay = calcDays(birth);
  const today = calcDays(str);

  for (let i = +year; i < date.getFullYear(); i++) {
    i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)
      ? (sum += 366)
      : (sum += 365);
  }

  return sum + today - birthDay;
};

console.log("alive days: ", aliveDays("1996-01-04"));
