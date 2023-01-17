'use strict';
const combinations = function (arr) {
  return arr.reduce(
    function (acc, curr) {
      return acc.concat(
        acc.map(function (ele) {
          return [curr].concat(ele);
        })
      );
    },
    [[]]
  );
};
console.log(combinations([1, 2]));
