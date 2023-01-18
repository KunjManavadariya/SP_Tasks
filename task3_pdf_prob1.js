'use strict';

//comparing two objects
const compareObjects = function (obj1, obj2) {
  console.log(
    Object.entries(obj1).sort().toString().toLowerCase() ===
      Object.entries(obj2).sort().toString().toLowerCase()
  );
  // console.log(
  //   Object.entries(obj1)
  //     .flat()
  //     .reduce(function (acc, curr, i) {
  //       acc =
  //         curr.toString().toLowerCase() ===
  //         Object.entries(obj2).flat()[i].toString().toLowerCase();
  //       return acc;
  //     }, false)
  // );
};
compareObjects(
  { hair: 'long', beard: 'false' },
  { beard: false, hair: 'Long' }
);
compareObjects(
  { hair: 'long', beard: 'false' },
  { hair: 'Long', beard: false }
);
compareObjects(
  { hair: 'long', beard: 'false' },
  { hair: 'Longer', beard: false }
);

// const compareObjects2 = function (obj1, obj2) {
//   console.log(JSON.stringify(Object.entries(obj1).flat().sort()));
//   console.log(JSON.stringify(Object.entries(obj2).flat().sort()));

//   console.log(
//     JSON.stringify(Object.entries(obj1).sort()) ===
//       JSON.stringify(Object.entries(obj1).sort())
//   );
// };
// compareObjects2({ hair: 'long', beard: false }, { hair: 'Long', beard: false });
