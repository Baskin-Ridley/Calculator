console.log("test")
let firstValue = ""
let secondValue = ""
let displayValue = null;
let operator = ""
console.log(displayValue)

const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator")
const currentOperationScreen = document.getElementById("currentOperationScreen")
const equalsButton = document.getElementById("equalsBtn")
const clearButton = document.getElementById("clearBtn")
//Math functions
function addition(firstValue, secondValue) {
    console.log("hello");
    console.log(firstValue)
    console.log(secondValue)
    return (firstValue + secondValue)
}

function subtraction(firstValue, secondValue) {
    return (firstValue - secondValue)
}

function multiply(firstValue, secondValue) {
    return (firstValue * secondValue)
}

function divide(firstValue, secondValue){
    return (firstValue / secondValue)
}

function operate(operator, firstValue, secondValue) {
    switch (operator) {
      case "+":
        return addition(firstValue, secondValue)
      case "−":
        return subtraction(firstValue, secondValue)
      case "*":
        return multiply(firstValue, secondValue)
      case "÷":
        if (secondValue === 0) return "null"
        else return divide(firstValue, secondValue)
      default:
        return "null"
    }
}



  
//Buttons
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendValue(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

equalsButton.addEventListener('click', calcOutput)

clearButton.addEventListener('click', clear)
//Display

function appendValue(number) {
  //add reset function later
  currentOperationScreen.textContent += number
  displayValue = currentOperationScreen.textContent
  console.log(displayValue)
}

//inputs

function setOperation(operation) {
  currentFirstValue = parseInt(displayValue)
  console.log(firstValue)
  currentOperator = operation
  console.log(operator)
  currentOperationScreen.textContent = ""
}
//outputs 
function calcOutput() {
  currentSecondValue = parseInt(currentOperationScreen.textContent)
  console.log(currentSecondValue)

  displayValue = operate(currentOperator, currentFirstValue, currentSecondValue)
  currentOperationScreen.textContent = displayValue
}

//clear

function clear() {
  console.log("clear")
  currentOperationScreen.textContent = 
  currentFirstValue = ""
  currentSecondValue = ""
  currentOperator = null
}