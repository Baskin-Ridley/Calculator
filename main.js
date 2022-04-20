console.log("test")
let firstValue = ""
let secondValue = ""
let displayValue = null;
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

function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return addition(a, b)
      case "−":
        return substract(a, b)
      case "*":
        return multiply(a, b)
      case "÷":
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}

  
//Buttons
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendValue(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => console.log(button.textContent))
)



//Display

function appendValue(number) {
  currentOperationScreen.textContent += number
  console.log()
}
