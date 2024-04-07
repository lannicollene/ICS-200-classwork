console.log("test :)")

let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
  // store all components on HTML in our JS
  let clear = document.querySelector("#ac");
  let equal = document.querySelector("#equals");
  let decimal = document.querySelector("#decimal");

  let numbers = document.querySelectorAll(".operand");
  let operators = document.querySelectorAll(".operator");

  let currentScreen = document.querySelector("#result");

  numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
  }))

  operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    currentScreen.textContent = previousValue + " " + operator;
    //currentScreen.textContent = currentValue;
  }))

  clear.addEventListener("click", function(){
    currentValue = '';
    operator = '';
    currentScreen.textContent = '0';
  })

  equal.addEventListener("click", function(){
    if (currentValue != '' && previousValue != '') {
      calculate()
      if(previousValue.length <= 10){
      currentScreen.textContent = previousValue;
      } else {
      currentScreen.textContent = previousValue.slice(0,10) + "...";
      }
    }
  })

  decimal.addEventListener("click", function(){
    addDecimal()
  })
})

function handleNumber(num){
  //console.log(num);
  if(currentValue.length <= 10){
    currentValue += num;
  }
}

function handleOperator(op){
  //console.log(op);
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculate(){
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if(operator === "+"){
    previousValue += currentValue;
  } else if (operator === "-"){
    previousValue -= currentValue;
  } else if(operator === "*"){
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}

function addDecimal(){
  if(!currentValue.includes(".")){
    currentValue += '.';
  }
}