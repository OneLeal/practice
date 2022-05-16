/**
 * 寻找对象中的属性:
 * 设计一个方法，输入目标对象和属性名，若在对象中能找到该属性则返回键值对，否则返回 null;
 */

const hasProp = function (data, prop) {
  let result = {};

  for (let i in data) {
    if (Object.keys(result).length) break;

    if (i == prop) {
      result[i] = data[prop];
      break;
    }

    if (data[i] instanceof Object) {
      result = hasProp(data[i], prop) || {};
    }
  }

  return Object.keys(result).length ? result : null;
};
let obj = {
  name: "feifei",
  age: 23,
  color: {
    a: "red",
    list: [15, { c: "Chinese" }],
    b: {
      lesson: {
        css: 11,
        js: 88,
      },
    },
  },
  height: 162,
};
console.log(hasProp(obj, "lesson"));
