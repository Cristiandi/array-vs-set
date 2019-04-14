// code writed by Bret Cameron
// https://medium.com/@bretcameron
// code referenced from:
// https://medium.com/@bretcameron/how-to-make-your-code-faster-using-javascript-sets-b432457a4a77

let array = [];
let set = new Set(); 
const n = 1000000;

// adding values to the array and to the set
for (let i = 0; i < n; i++) {
  array.push(i);
  set.add(i);
}

// searching 123123 number
console.log('searching a number item.');

const number = 123123;
let result;

console.time('Array'); 
result = array.indexOf(number) !== -1; 
console.timeEnd('Array');

console.time('Set'); 
result = set.has(number); 
console.timeEnd('Set');

//adding a new item
console.log('adding a new item.');

console.time('Array'); 
array.push(n);
console.timeEnd('Array');
console.time('Set'); 
set.add(n);
console.timeEnd('Set');

// deleting a item
console.log('deleting a item.');

const deleteFromArr = (array, item) => {
  let index = array.indexOf(item);
  return index !== -1 && array.splice(index, 1);
};

console.time('Array'); 
deleteFromArr(array, n);
console.timeEnd('Array');
console.time('Set'); 
set.delete(n);
console.timeEnd('Set');

// Case 1: removing duplicate values from an array
console.log('Removing duplicate values from an array.');
const duplicateCollection = ['A', 'B', 'B', 'C', 'D', 'B', 'C'];
console.log(duplicateCollection);
// If you want to turn the array into a Set
let uniqueCollection = new Set(duplicateCollection);
console.log(uniqueCollection) // Result: Set(4) {"A", "B", "C", "D"}
// If you want to keep your values in an array
uniqueCollection = [...new Set(duplicateCollection)];
console.log(uniqueCollection) // Result: ["A", "B", "C", "D"]

// Case 2: a Google interview question
console.log('Google interview question');
/*
Given an unordered array of integers and a value sum, return true if any two items may be added such
that they equal the value of sum . Otherwise, return false.
*/

const findSum = (array, val) => {
  let searchValues = new Set();
  searchValues.add(val - array[0]);
  for (let i = 1, length = array.length; i < length; i++) {
    let searchVal = val - array[i];
    if (searchValues.has(array[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  };
  return false;
};


console.time('Google question');
console.log(`can I find the sum of ${number} in the array?`, findSum(array, number) ? 'yes' : 'no');
console.timeEnd('Google question');
