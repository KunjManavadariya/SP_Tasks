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
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};
//1.
for (let ele of nestedData.innerData.numberData.primeNumbers) {
  console.log(ele);
}
//2.
for (let ele of nestedData.innerData.numberData.fibonnaci) {
  ele % 2 === 0 && console.log(ele);
}
//3.
console.log(nestedData.innerData.order[1]);
//4.
console.log(nestedData.innerData.addSnack('chocolate'));
//5.
//this keyword inside of the addSnack function refers to the innerData object as it was called on that object
