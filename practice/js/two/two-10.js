/**
 * 寻找对象中的属性:
 * 设计一个方法，输入目标对象和属性名，若在对象中能找到该属性则返回键值对，否则返回 null;
 */

const hasProp = function (data, prop) {
  let result = {};
  if (data.hasOwnProperty(prop)) {
    for (const i in data) {
      if (prop == i) result[i] = data[i];
    }
    return result;
  } else return null;
};
let obj = {
  name: 'feifei',
  age: 23,
  height: 162,
  width: 888,
};
console.log(hasProp(obj, 'height'));
