'use strict';

(function (str) {
  const firstEnter = str.indexOf('\n');
  const keys = str.slice(0, firstEnter).split(',');
  const tempValues = str.slice(firstEnter + 1).split('\n');
  let resultArray = [];
  tempValues.map(function (ele) {
    const values = ele.split(',');
    resultArray.push(
      keys.reduce(function (acc, curr, index) {
        if (values[index]) {
          acc[curr] = values[index];
        }
        return acc;
      }, {})
    );
  });
  console.log(resultArray);
})('col1,col2,col3\na,b\nc,d\ne,f,h');
//if no value for a property, then the property should not be added
