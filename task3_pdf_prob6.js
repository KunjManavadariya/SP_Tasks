'use strict';
(function (arr) {
  let repeated = [];
  const unique = arr.filter(function (ele) {
    if (arr.indexOf(ele) === arr.lastIndexOf(ele)) return true;
    else {
      if (!repeated.includes(ele)) repeated.push(ele);
      return false;
    }
  });
  console.log(unique, repeated);
})([1, 2, 2, 3, 4, 4, 5]);

const arrofObj = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const ans = arrofObj.find(rlm => rlm.a);
//[{a:2}]
