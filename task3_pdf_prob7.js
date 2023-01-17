'use strict';

const regex = function (str) {
  const positive = /^(y|yes)$/i;
  const negative = /^(n|no)$/i;
  return positive.test(str) ? true : negative.test(str) ? false : null;
};
console.log(regex('y'));
console.log(regex('No'));
console.log(regex('anyString'));
