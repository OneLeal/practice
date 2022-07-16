/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var count = 0;
  var gList = g.sort((a, b) => b - a);
  var sList = s.sort((a, b) => b - a);

  for (var i = 0, j = 0; i < gList.length; ) {
    if (!sList[j]) break;

    if (gList[i] <= sList[j]) {
      count++;
      i++;
      j++;
    } else i++;
  }
  return count;
};

var g = [10, 9, 8, 7];
var s = [5, 6, 7, 8];
var result = findContentChildren(g, s);
console.log("result: ", result);
