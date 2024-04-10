"use strict";

let firstNumber = "";
let secondNumber = "";
let mainOperator;
let lastAction;
let float = false;

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
  if (numB === 0) {
    return "yikers, dividing with 0? rly?";
  }
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
      if (float && lastAction === 1) {
        firstNumber += e.target.textContent;
        display.innerHTML = firstNumber;
        console.log("float1");
        return;
      }
      if (float && lastAction === 2) {
        secondNumber += e.target.textContent;
        display.innerHTML = secondNumber;
        console.log("float2");
        return;
      }
      if (!mainOperator) {
        if (!firstNumber) {
          firstNumber = e.target.textContent;
          display.innerHTML = e.target.textContent;
          lastAction = 1;
          console.log("float3");
        } else {
          firstNumber += e.target.textContent;
          display.innerHTML = firstNumber;
          lastAction = 1;
          console.log("float4");
        }
      } else {
        if (!secondNumber) {
          secondNumber = e.target.textContent;
          display.innerHTML = e.target.textContent;
          lastAction = 2;
          console.log("float5");
        } else {
          secondNumber += e.target.textContent;
          display.innerHTML = secondNumber;
          lastAction = 2;
          console.log("float6");
        }
      }
    })
  );
  document.querySelectorAll(".operators").forEach((elem) =>
    elem.addEventListener("click", function (e) {
      if (
        e.target.id === "float" &&
        (!firstNumber.toString().includes(".") ||
          !secondNumber.toString().includes("."))
      ) {
        if (lastAction === 1) {
          firstNumber += ".";
          display.innerHTML = firstNumber;
          float = true;
          console.log("oper1");
          return;
        }
        if (lastAction === 2) {
          secondNumber += ".";
          display.innerHTML = secondNumber;
          float = true;
          console.log("oper2");
          return;
        }
      }
      if (e.target.id !== "float" && !mainOperator) {
        mainOperator = e.target.id;
        float = false;
        console.log("oper3");
      } else if (e.target.id !== "float" && float) {
        firstNumber = operate(firstNumber, secondNumber, mainOperator);
        secondNumber = false;
        float = false;
        display.innerHTML = firstNumber;
        mainOperator = e.target.id;
        console.log("oper4");
      }
    })
  );
  document.querySelector("#equals").addEventListener("click", function () {
    if (firstNumber && secondNumber && mainOperator) {
      display.innerHTML = operate(firstNumber, secondNumber, mainOperator);
    }
  });
  document.querySelector("#clear").addEventListener("click", function () {
    firstNumber = false;
    secondNumber = false;
    mainOperator = false;
    float = false;
    display.innerHTML = "";
  });
});
