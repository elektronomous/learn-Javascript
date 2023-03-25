// 01
// alert("This works");

// 02
let currentResult = 0;
// 05
// let calculationEquation = '(' + currentResult + ' + 10) * 30 + 30';
// 06
let calculationEquation = `(${currentResult} + 10) * 30 + 30`;

currentResult = currentResult + 10;         // => 10
// you can have any mathematical operation
currentResult = currentResult * 30 + 30;    // => 330

// pass currentResult, then change the code on the html code using it.
outputResult(currentResult, '');    

// create the equation for html to be displayed.
// 05
// let calculationEquation = '(0 + 10) * 30 + 30';

// pass the equation
outputResult(currentResult, calculationEquation);
