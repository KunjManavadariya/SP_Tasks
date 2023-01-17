'use strict';

const sorting = function (arr) {
  arr.sort(function (curr, next) {
    return curr.name > next.name ? 1 : -1;
  });
  return arr;
};
console.log(
  sorting([
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 },
  ])
);
