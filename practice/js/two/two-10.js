/**
 * 寻找对象中的属性:
 * 设计一个方法，输入目标对象和属性名，若在对象中能找到该属性则返回键值对，否则返回 null;
 */

const hasProp = function (data, prop) {
  let key = null;

  for (let keyName in data) {
    if (key) break;

    if (prop === keyName) {
      key = { [keyName]: data[keyName] };
      break;
    }

    data[keyName] instanceof Object && (key = hasProp(data[keyName], prop));
  }

  return key;
};

const data = {
  name: "xxx",
  arr: [1, [33, "iron", { a: [{ leaf: 15 }] }], { sum: 120 }],
  info: { age: 24, message: { list: [{}, { lesson: "asd" }] } },
};

console.log(hasProp(data, "sum"));
