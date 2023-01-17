'use strict';

(function (arr) {
  const keys = Object.keys(arr[0]).join(',');
  let values = [];
  arr.forEach(function (ele) {
    values.push(Object.values(ele));
  });
  const result = keys.concat('\\n', values.flat().join(','));
  console.log(result);
})([
  { col1: 'a', col2: 'b' },
  { col1: 'c', col2: 'd' },
  { col1: 'e', col2: 'f' },
  { col1: 'g', col2: 'h', col3: 'i' },
]);
//\n betweem the values, also the new prop should be added
