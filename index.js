// code here, goodluck!!
'use strict';

const prompt = require('prompt-sync')();

console.log('======================');
console.log('    CLI Calculator    ');
console.log('======================');

while (true) {
  // Request input
  function getValidNumber(message) {
    while (true) {
      const userInput = prompt(message).trim();

      if (userInput === '') {
        console.log('======================');
        console.log('    ERROR');
        console.log();
        console.log("    Input can't be empty! Please write any number.");
        console.log('======================');
        continue;
      }

      const number = Number(userInput);

      if (isNaN(number)) {
        console.log('======================');
        console.log('    ERROR');
        console.log();
        console.log('    Input only number!');
        console.log('======================');
        continue;
      }

      return number;
    }
  }

  // Request operator
  function getValidOperator() {
    while (true) {
      const userInput = prompt(
        'Enter The Operator (+, -, *, /, %, **): '
      ).trim();
      if (
        userInput !== '+' &&
        userInput !== '-' &&
        userInput !== '*' &&
        userInput !== '/' &&
        userInput !== '%' &&
        userInput !== '**'
      ) {
        console.log('======================');
        console.log('    ERROR');
        console.log();
        console.log('    Input only the listed operator!');
        console.log('======================');
        continue;
      }

      return userInput;
    }
  }

  const number1 = getValidNumber('Enter The First Number: ');
  const operator = getValidOperator();
  const number2 = getValidNumber('Enter The Second Number: ');

  // Calculation
  let result;
  switch (operator) {
    case '+':
      result = add(number1, number2);
      break;
    case '-':
      result = subtraction(number1, number2);
      break;
    case '*':
      result = multiplication(number1, number2);
      break;
    case '/':
      if (number1 === 0 && number2 === 0) {
        result = '0 / 0 = undefined';
        break;
      }

      if (number2 === 0) {
        result = 'Cannot divide by zero';
        break;
      }

      result = division(number1, number2);
      break;
    case '%':
      if (number2 === 0) {
        result = 'Cannot divide by zero';
        break;
      }

      result = modulo(number1, number2);
      break;
    case '**':
      result = power(number1, number2);
      break;
  }

  if (typeof result === 'number') {
    let info1;
    if (result > 0) {
      info1 = 'positive';
    } else if (result < 0) {
      info1 = 'negative';
    } else {
      info1 = 'zero';
    }

    const info2 = Number.isInteger(result) ? 'integer' : 'decimal';
    const info3 = result % 2 === 0 ? 'even' : 'odd';

    console.log('======================');
    console.log('    RESULT');
    console.log();
    console.log(`    ${number1} ${operator} ${number2} = ${result}`);
    console.log(`    ${result} is ${info1}`);
    console.log(`    ${result} is ${info2}`);
    console.log(`    ${result} is ${info3}`);
    console.log('======================');
  } else {
    console.log('======================');
    console.log('    ERROR');
    console.log();
    console.log(`    ${result}`);
    console.log('======================');
  }

  // Run again
  let isAgain;
  while (true) {
    const userInput = prompt('Again?(y/n): ').trim().toLowerCase();
    if (userInput === 'y' || userInput === 'n') {
      isAgain = userInput;
      break;
    } else {
      console.log('======================');
      console.log('    ERROR');
      console.log();
      console.log('    Please only y or n');
      console.log('======================');
    }
  }

  if (isAgain === 'n') {
    console.log('======================');
    console.log('    Terminating program');
    console.log('======================');
    break;
  }
}

function add(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}
