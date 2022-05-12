/**
 * 计算输入时间区间内的所有时刻:
 * 设计一个方法，输入开始时间，结束时间，间隔时间，返回输入区间内的所有时刻。
 */

const getTimeList = function (start, end, step) {
  // 非法值判断
  if (
    !start ||
    !end ||
    !step ||
    typeof start !== "string" ||
    typeof end !== "string" ||
    typeof step !== "number"
  )
    return null;

  const [startHour, startMin] = start.split(":");
  const [endHour, endMin] = end.split(":");
  const SEC_MIN = 60;
  const count = Math.floor(SEC_MIN / step);
  const result = [];

  // 分钟数: [0, 59] / 小时数: [0, 23]
  if (
    startHour > 23 ||
    startHour < 0 ||
    endHour > 23 ||
    startHour < 0 ||
    startMin < 0 ||
    startMin > 59 ||
    endMin < 0 ||
    endMin > 59
  )
    return null;

  for (let i = +startHour; i <= +endHour; i++) {
    i === +startHour && startMin === "00" && result.push(`${i}:00`); // 整点额外补一次
    for (let j = 1; j <= count; j++) {
      // 边界条件处理: 起始分钟 < step*j < 结束分钟
      if (
        (startMin > step * j && i === +startHour) ||
        (endMin < step * j && i === +endHour)
      ) {
        continue;
      }

      // 进位处理
      step * j === SEC_MIN
        ? result.push(`${i + 1}:00`)
        : result.push(`${i}:${step * j}`);
    }
  }

  return result;
};

console.log(getTimeList("09:00", "13:05", 15));
console.log(getTimeList("08:47", "14:35", 15));
console.log(getTimeList("00:00", "23:59", 30));
