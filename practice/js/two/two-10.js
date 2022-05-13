/**
 * 寻找对象中的属性:
 * 设计一个方法，输入目标对象和属性名，若在对象中能找到该属性则返回键值对，否则返回 null;
 */

const hasProp = function (data, prop) {
 let result = {}
  for (let i in data) {
    if (i==prop) {
       result[i] = data[prop];
       return result;
       break;
    }
     if (typeof data[i] === 'object') {
        return hasProp(data[i], prop);
     }
   }
   return null
};
let obj = {
  name: 'feifei',
  age: 23,
  color: {
    a: 'red',
     b: {
        lesson: {
           css: 11,
           js:88
       }
    },
  },
  height: 162,
};
console.log(hasProp(obj, 'cssss'));

/**
 * 批注:
 * 老婆真 too simple to naive;
 * 这么简单要啥循环，直接 obj[key] 不就出来了;
 * 要考虑深度对象
 */
