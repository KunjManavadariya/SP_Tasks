const removeKeys = function (obj, keyArr) {
  const tempObj = { ...obj };
  keyArr.forEach(function (ele) {
    if (Object.keys(obj).includes(ele)) delete tempObj[ele];
  });
  console.log(tempObj);
  console.log(obj);
};
removeKeys({ a: 1, b: '2', c: 3 }, ['b', 'd', 'c']);
