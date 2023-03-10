'use strict';
/*
let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
  Using a for loop, console.log all of the numbers in the primeNumbers array.
  Using a for loop, console.log all of the even Fibonnaci numbers.
  Console.log the value "second" inside the order array.
  Invoke the addSnack function and add the snack "chocolate".
  Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?
  */
let nestedData = {
  innerData: {
    order: ['first', 'second', 'third'],
    snacks: ['chips', 'fruit', 'crackers'],
    numberData: {
      // primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};
//1.
let path =
  nestedData &&
  nestedData.innerData &&
  nestedData.innerData.numberData &&
  nestedData.innerData.numberData.primeNumbers;
if (path) {
  path.forEach(function (ele) {
    console.log(ele);
  });
} else console.log('Path is not proper for Prime!');
//2.
path =
  nestedData &&
  nestedData.innerData &&
  nestedData.innerData.numberData &&
  nestedData.innerData.numberData.fibonnaci;
if (path) {
  for (let ele of path) {
    ele % 2 === 0 && console.log(ele);
  }
} else console.log('Path is not proper for Fibonacci!');
//3.
console.log(nestedData.innerData.order.find(ele => ele === 'second'));
//4.
console.log(nestedData.innerData.addSnack('chocolate'));
//5.
//this keyword inside of the addSnack function refers to the innerData object as it was called on that object
