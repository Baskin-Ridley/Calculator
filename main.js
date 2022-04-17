console.log("test")

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
      case "×":
        return multiply(a, b)
      case "÷":
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}

