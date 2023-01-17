'use strict';
// (function (obj, rename) {
//   const result = Object.keys(obj).reduce(
//     (acc, curr) => ({
//       ...acc,
//       ...{ [rename[curr] || curr]: obj[curr] },
//     }),
//     {}
//   );
//   console.log(obj);
//   console.log(result);
// })(
//   { name: 'JJ', job: 'Programmer', age: 22 },
//   { name: 'firstName', job: 'Role' }
// );
const renameKeys = function (obj, rename) {
  const tempObj = { ...obj };
  for (let prop in rename) {
    rename[prop] = tempObj[prop];
  }
  console.log(tempObj);
  console.log(obj);
};
renameKeys(
  { name: 'JJ', job: 'Programmer', age: 22 },
  { name: 'firstName', job: 'Role' }
);
