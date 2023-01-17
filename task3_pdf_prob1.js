'use strict';

//comparing two objects
const compareObjects = function (obj1, obj2 = {}) {
  console.log(Object.entries(obj1).flat(), Object.entries(obj2).flat());
  console.log(
    Object.entries(obj1)
      .flat()
      .reduce(function (acc, curr, i) {
        // console.log(typeof curr);
        acc =
          typeof curr !== 'boolean' &&
          typeof Object.entries(obj2).flat()[i] !== 'boolean'
            ? curr === Object.entries(obj2).flat()[i]
            : String(curr) === String(Object.entries(obj2).flat()[i]);
        return acc;
      }, false)
  );
};
compareObjects(
  { hair: 'long', beard: 'false' },
  { hair: 'Long', beard: false }
);

const compareObjects2 = function (obj1, obj2) {
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
};
compareObjects2({ hair: 'long', beard: false }, { hair: 'long', beard: false });
