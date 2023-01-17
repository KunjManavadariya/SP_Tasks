const removeKeys = function (obj, keyArr) {
  keyArr.forEach(function (ele) {
    if (Object.keys(obj).includes(ele)) delete obj[ele];
  });
  console.log(obj);
};
removeKeys({ a: 1, b: '2', c: 3 }, ['b', 'd']);
