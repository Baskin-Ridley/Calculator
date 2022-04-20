console.log("test")
let firstValue = ""
let secondValue = ""
let displayValue = null;
let operator = ""
console.log(displayValue)

const numberButtons = document.querySelectorAll("[data-number]")
const operatorButtons = document.querySelectorAll("[data-operator")
const currentOperationScreen = document.getElementById("currentOperationScreen")


//Math functions
function addition(firstValue, secondValue) {
    console.log("hello");
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
        return substract(firstValue, secondValue)
      case "*":
        return multiply(firstValue, secondValue)
      case "÷":
        if (b === 0) return null
        else return divide(firstValue, secondValue)
      default:
        return null
    }
}



  
//Buttons
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendValue(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function setOperation(button) {
  let firstValue = displayValue
  console.log(firstValue)
  let operator = button
  console.log(operator)
  currentOperationScreen.textContent = ""
}


//Display

function appendValue(number) {
  //add reset function later
  currentOperationScreen.textContent += number
  displayValue = currentOperationScreen.textContent
  console.log(displayValue)
}
