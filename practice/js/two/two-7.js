/**
 * 解析 url 中的参数:
 * 输入一段 url 地址，返回一个包含 url 参数的对象;
 *
 * 例:
 * 输入: url = "www.imooc.com?user=James&page=10"
 * 输出: { user: 'James', page: '10' }
 */

const url = "www.baidu.com?user=Jonh&age=25&phone=13332905448&job=engineer";
const fetchSearchParams = function (url) {
   let result = url.split('?')[1]
   let strArr = result.split('&');
   let resultArr = {}
   strArr.forEach(item => {
   let [key, value] = item.split('=')
    resultArr[key] = value
   })
   return resultArr
};
console.log(fetchSearchParams(url));