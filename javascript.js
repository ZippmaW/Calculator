"use strict";

let firstNumber;
let secondNumber;
let mainOperator;

function add(numA, numB) {
  return numA + numB;
}

function subtract(numA, numB) {
  return numA - numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

function divide(numA, numB) {
  return numA / numB;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(Number(num1), Number(num2));
    case "subtract":
      return subtract(Number(num1), Number(num2));
    case "multiply":
      return multiply(Number(num1), Number(num2));
    case "divide":
      return divide(Number(num1), Number(num2));
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  document.querySelectorAll(".numBTN").forEach((element) =>
    element.addEventListener("click", function (e) {
      if (!mainOperator) {
        if (!firstNumber) {
          firstNumber = e.target.textContent;
          display.innerHTML = e.target.textContent;
        } else {
          firstNumber += e.target.textContent;
          display.innerHTML = firstNumber;
        }
      } else {
        if (!secondNumber) {
          secondNumber = e.target.textContent;
          display.innerHTML = e.target.textContent;
        } else {
          secondNumber += e.target.textContent;
          display.innerHTML = secondNumber;
        }
      }
    })
  );
  document.querySelectorAll(".operators").forEach((elem) =>
    elem.addEventListener("click", function (e) {
      if (!mainOperator) {
        mainOperator = e.target.id;
        console.log(mainOperator);
      }
    })
  );
  document.querySelector("#equals").addEventListener("click", function () {
    display.innerHTML = operate(firstNumber, secondNumber, mainOperator);
  });
  document.querySelector("#clear").addEventListener("click", function () {
    firstNumber = false;
    secondNumber = false;
    mainOperator = false;
    display.innerHTML = "";
  });
});
