/**
 * 计算小球走过的路程及距离地面高度:
 * 小球从高度为 height 的地方落下，每次弹起为下落高度的一半，
 * 经 count 次反弹后小球距离地面多高，共走过多少路程？
 */

const ballInfo = function (height, count) {
  let distance = 0;
  for (let i = 1; i <= count; i++) {
    const half = (height / 2).toFixed(2);
    distance = distance + +height + +half;
    height = +half;
  }
  distance = +distance.toFixed(2);
  return { distance, height };
};

const height = 100;
const count = 4;
const result = ballInfo(height, count);
console.log("result: ", result);
