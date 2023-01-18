'use strict';
(function (arr) {
  let repeated = [];
  let nonRepeated = [];
  // const unique = arr.filter(function (ele) {
  //   if (arr.indexOf(ele) === arr.lastIndexOf(ele)) return true;
  //   else {
  //     if (!repeated.includes(ele)) repeated.push(ele);
  //     return false;
  //   }
  // });
  arr.map(function (ele) {
    if (arr.indexOf(ele) === arr.lastIndexOf(ele)) nonRepeated.push(ele);
    else {
      if (!repeated.includes(ele)) repeated.push(ele);
    }
  });
  console.log(nonRepeated, repeated);
})([1, 2, 2, 3, 4, 4, 5]);

const arrofObj = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const ans = arrofObj.find(rlm => rlm.a);
//[{a:2}]
