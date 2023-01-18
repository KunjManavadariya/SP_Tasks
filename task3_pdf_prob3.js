'use strict';

(function (arr) {
  const keys = [];
  let values = [];

  arr.forEach(function (ele) {
    keys.push(Object.keys(ele));
    values.push(Object.values(ele));
  });

  const finalKeys = [...new Set(keys.flat())].join(',');
  const result = finalKeys.concat('\\n', values.join('\\n'));
  console.log(result);
})([
  { col1: 'a', col2: 'b' },
  { col1: 'c', col2: 'd' },
  { col1: 'e', col2: 'f' },
  { col1: 'g', col2: 'h', col3: 'i' },
]);
//\n between the values
