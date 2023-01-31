let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//Create four functions: add(), subtract(), divide(), multiply(), 
//call the correct function when the user clicks on one of the buttons
//Perform the given calculations using num1 and num2
//Render the result of the caluation in the paragraph with the id="sum-el"

function add() {
  let result = num1 + num2
  console.log(result)
  document.getElementById("sum-el").textContent = "Sum: " + result;
}

function subtract() {
  let result = num1 - num2
  console.log(result)
  document.getElementById("sum-el").textContent = "Sum: " + result;
}

function divide() {
  let result = num1 / num2
  console.log(result)
  document.getElementById("sum-el").textContent = "Sum: " + result;
}

function multiply() {
  let result = num1 * num2
  console.log(result)
  document.getElementById("sum-el").textContent = "Sum: " + result;
}

