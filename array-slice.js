const numbers = [1,3,5,65,4,6,7,8,9,19,20,23];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an element from an array

// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 0, 34, 157, 876, 777 );
console.log(numberSpliced2);
console.log(numbers);