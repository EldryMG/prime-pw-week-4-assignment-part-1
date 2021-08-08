console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log(hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name} !`;
}
// Remember to call the function to test
console.log(helloName(`Jo`));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(`addNumbers - should say 7: `, addNumbers(3, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3
}

console.log(`multiplayThree - should say 18: `, multiplyThree(3, 3, 2));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
qSix = [22, 4309, 635, 838, 15, 64];
emptyArr = []

function getLast(array) {
  return array.pop();
  if (array.length === 0) {
    return;
  }
}
console.log(`getLast -- should be 64: `, getLast(qSix));
console.log(`getLast on an empty array -- should return undefined: `, getLast(emptyArr));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

console.log(`find function looking for the number six, should be false: `, find('6', qSix));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter === string[0] ? true : false;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array


function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(`Sum of 22, 4309, 635, 838 and 15 is: ${sumAll(qSix)}`);
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
qSix = [22, -4309, -635, 838, -6, 64];
newArray = [];

function positiveNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
positiveNum(qSix);
console.log(`Array with all positive numbers: `, newArray);
console.log(`Input array: `, qSix);


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it

//Write a function that takes two values and returns the lowest of the two.

function lowestNum(num1, num2){
  if (num1>num2){
    return num2;
  } else {
    return num1;
  }
}

console.log(`Should return 2: `, lowestNum(2,5));
console.log(`Should return 23: `, lowestNum(55,23));
console.log(`Should return -10: `, lowestNum(0,-10));
console.log(`Should return 4: `, lowestNum(4,4));
