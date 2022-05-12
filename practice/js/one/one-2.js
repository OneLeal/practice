/**
 * 计算天数:
 * 输入某年某月某日(yyyy-mm-dd)，判断这一天是这一年的第几天？
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

const date = new Date();
const str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
console.log(`第${calcDays(str)}天`);
