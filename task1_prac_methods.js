'use strict';

//var let const (3 diff)
{
  /*Diff:
1. var is fn scoped. let and const are block scoped.
2. var is hoisted undefined and gives no error. let and const are hoisted in TDZ and throws error of can't access before initialization
3. var can be redeclared and reassigned. let can only be reassigned. const can't be either.
*/
  // var varVariable = 23;
  // let letVariable = 3;
  // console.log(varVariable);
  function tester() {
    {
      console.log(varVariable); //hoisted undefined
      var varVariable = 43;
      var varVariable = 50;
      console.log(varVariable); //redeclared with the same name
    }
    {
      // console.log(letVariable); //throw error, as hoisted but won't initialize. Can't access before initialization
      let letVariable = 5;
      letVariable = 'Kunj';
    }
    // console.log(varVariable); //no error as var is fn scoped
    //   console.log(letVariable); //error here as let is block scoped
  }
  tester();
}

//Operators
{
  let operand1 = 10;
  let operand2 = 10;
  let operand3;
  //Arithmetic Operators
  {
    operand3 = operand1 + operand2;
    operand3 = operand1 - operand2;
    operand3 = operand1 * operand2;
    operand3 = operand1 / operand2;
    operand3 = operand1 ** operand2;
    console.log(operand3);
  }
  //Comparison Operators
  {
    operand1 = 2;
    operand2 = '2';
    let compare = operand1 == operand2;
    compare = operand1 === operand2;
    compare = operand1 != operand2;
    compare = operand1 !== operand2;
  }
  //Relational Operators
  {
    operand1 = 10;
    operand2 = 20;
    let relation = operand1 > operand2;
    relation = operand1 < operand2;
    relation = operand1 >= operand2;
    relation = operand1 <= operand2;
  }
  //Assignment Operators
  {
    operand1 = 10;
    operand2 = 20;
    operand1 += operand2;
    operand1 -= operand2;
    operand1 *= operand2;
    operand1 /= operand2;
    operand1++;
    operand2--;
    operand1 = operand2;
  }
  //Ternary Operators
  let ternary = true;
  operand1 > operand2 ? (ternary = true) : (ternary = false);
}

//if-else
{
  let str1 = 'Kunj';
  let str2 = 'spilot';
  let conditionalFlag = 0;
  if (str1[0] === str2[0]) conditionalFlag = 1;
  else conditionalFlag = 0;

  let num1 = 20,
    num2 = 20;
  if (num1 > num2) console.log(num1);
  else if (num1 < num2) console.log(num2);
  else console.log('equal');
  //   console.log(conditionalFlag);
}

//Switch case
{
  const switchVariable = 20;
  switch (switchVariable) {
    case 10:
      console.log('Value is 10');
      break;
    case 20:
      console.log('20 is the value');
      break;
    default:
      console.log('Default case');
  }
}

//Loops
{
  //while loop
  {
    let whileLoop = 5;
    let temp = 0;
    while (whileLoop) {
      temp++;
      whileLoop--;
    }
  }
  //for loop
  {
    let forLoopVariable = 5;
    let temp = 0;
    for (let i = 0; i <= forLoopVariable; i++) {
      temp++;
    }
  }
  //for in loop (doubt why properties keyed with symbols are ignored.)
  {
    console.log('For in loop');
    let sym = Symbol.for('foo');
    const arr1 = {
      a: 1,
      b: 2,
      c: 3,
      calcAge() {
        console.log('method');
      },
      12: 23,
    };
    arr1[sym] = 256;
    for (const property in arr1) {
      console.log(`${property}`);
    }
  }
  //forEach (iterables, why no forEach for strings (any specific reason or just the convention?))
  {
    let arr1 = [1, 2, 3, 4, 5];
    let str1 = 'kunj';
    arr1.forEach(function (ele, i, arr) {
      if (ele === 5) {
        arr1.pop();
      }
    });
    str1.split().forEach(function (ele, i, arr) {
      // console.log(ele);
    });
  }
  //for-of loop
  {
    let arr2 = [1, 2, 3, 4, 5];
    let str2 = 'kunj';
    for (ele of arr2) {
      console.log(ele);
    }
    for (arrayIndVal of arr2.entries()) {
      console.log(arrayIndVal);
    }
  }
}

//Functions
{
  //DRY code
  /*2 types of declaration
    1. Function declaration
    2. Function expression
    */
  function task1(param1, param2) {
    console.log(param1, param2);
    return param1 + param2;
  }
  const task2 = function (param1, param2) {
    console.log(param1, param2);
    return param1 + param2;
  };

  //Arrow fn
  const task3 = (param1, param2) => param1 + param2;
}

//String Methods
{
  const str = '  Kunj is practicing JS.';
  const str2 = 'And methods';
  const str3 = 'in detail';
  console.log(str.length);
  console.log(str.indexOf('i')); //first occ
  console.log(str.indexOf('z')); //-1
  console.log(str.lastIndexOf('i')); //last occ
  console.log(str.search(/[^\w\s]/g)); //first occurence of regex, -1 if not found
  console.log('KUNJ MANAVADARIYA'.slice(2, 3)); //ret new string, empty string if order is not correct
  console.log(str.substring(2, 0)); //swaps order for correctness, no -ve index, clamp -ve to 0
  console.log(str.substr(-4, 7)); //start, no. of ele
  console.log(str.replace('Kunj', 'kp')); //new string
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  console.log(str.concat(' ', str2, ' ', str3));
  console.log(str.trim());
  console.log(str.trimStart());
  console.log(str.trimEnd());
  console.log(str.charAt(13)); //empty string if out of range
  console.log(str.charCodeAt(13)); //nan if out of range, else gives ASCII or Unicode
  console.log(str.split('')); //indi char as array elements
  console.log(str.split(' ')); //splits when given char encountered
}

//Array methods
{
  const arr1 = [1, 2, 3, 4, 'Kunj', 'JS ', 555, true, 4, 2];
  const tempArr = arr1;
  arr1.forEach(function (ele, i, arr) {
    console.log(ele, i, arr);
  });

  console.log(arr1.indexOf(4, 2)); //ele, startIndex //-1 if not found

  arr1.lastIndexOf(ele); //last index of given ele

  arr1.includes(2, 3); //returns boolean

  arr1.find(function (ele, i, arr) {
    return ele > 2;
  }); //finds on basis of condition, undefined if nothing satisfies the condition

  console.log(
    arr1.findIndex(function (ele, i, arr) {
      return ele > 2;
    })
  ); //index on the basis of a condition, -1 if nothing found

  arr1.filter(function (ele, i, arr) {
    return ele > 2;
  }); //new array with filtered elements

  arr1.map((ele, _, arr) => ele * 2); //new array with all elements operated over a condition

  arr1.sort(function (curr, next) {
    return curr - next; //comparator func //if return is >1, then swap, else keep order
  });

  tempArr.reverse();

  temp.splice(-3, 0, false, 'undefined'); //removes ele=2nd arg, adds rest of the ele from start index

  temp.join(' '); //joins all ele with given joiner string and returns a string

  temp.reduce(function (acc, ele, i, arr) {
    return acc * 2;
  }, temp[0]); //reduce right does the same but it runs from the last element

  temp.some(function (ele, i, arr) {
    return 'expression';
  }); //returns boolean if at least one element returns true. In every, it should be all elements returning true.
}

//Objects
{
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  const obj2 = {
    c: 4,
    e: 5,
    f: 6,
  };

  //assign
  {
    Object.assign(obj1, obj2);
    // console.log(arr1);
  }
  //create (new object with other object's prototype)
  {
    const obj3 = Object.create(obj2);
    console.log(obj3.e);
  }
  //defineProperty
  {
    Object.defineProperty(obj2, 'g', {
      value: 7,
      writable: false,
    });
    Object.defineProperty(obj, 'key', descriptorObject);
  }
  //entries
  {
    //Object.entries give array with key-value pair(as array), so final array of array(map)
    for (ele of Object.entries(obj2)) {
      console.log(ele);
    }
  }
  //freeze makes object immutable and even prototype can't be reassigned. In short, no operation works on it.
  //fromEntries
  {
    let arr1 = [
      [1, 2],
      [2, 3],
    ];
    console.log(Object.fromEntries(arr1));
    console.log(arr1.__proto__ === Object.getPrototypeOf(arr1));
  }
  //getOwnPropertyDescriptor(obj, "prop") gives the descriptor object for the property
  //getOwnPropertyNames(obj) gives array of all the properties of a given object (no symbol props)
  //getOwnPropertySymbols(obj) gives array of all properties keyed by symbols
  //getPrototypeOf is equal to __proto__
  console.log(Object.is([1, '2'], [1, 2]));
  console.log([1, '2'] == [1, 2]);
  //Object.is(obj1, obj2) is used to compare 2 values
  //Object.isExtensible(obj1) is used to check whether new props can be added to the object, returns boolean
  //Object.isFrozen(obj1) is used to check whether an object is frozen, returns boolean
  //Object.isSealed(obj1) is used to check whether an object is sealed, returns boolean.
  //Sealed objects can have prop values changed if they are writable, while freezed objects can't change
  //Object.keys(obj) gives array of prop names which are enumerable. While Object.getPropertyNames(obj) gives array of all prop names which are non-enumerable as well
  //Object.setPrototypeOf(obj, protoObj) is the way to set the prototype of an object to a proto object
  //Object.preventExtensions(obj) is used to prevent any extensions to obj props or proto. Existing props can be deleted.
}
