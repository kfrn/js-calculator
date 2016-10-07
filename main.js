document.addEventListener('DOMContentLoaded', start);

var equation = "";
var result = 0;

function start () {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", getButton);
    }
}

function getButton(evt) {
    if (evt.target.id === "AC") {
        clearResult();
    } else if (evt.target.id === "CE") {
        clearLast();
    } else if (evt.target.id === "equals") {
        calculateResult();
    } else {
        equation += evt.target.value;
        updateDOM("equation", equation);
    }
}

function calculateResult() {
    if (illegalExpression(equation) === false) {
      updateDOM("result", "Illegal!");
    } else {
        result = eval(equation);
        updateDOM("result", result)
    }
    equation = "";
    equation = result;
}

function illegalExpression(equation) {
  var equationArray = equation.split(/\d{1,}/g); // This returns an array of just the operators
  var permitted = ["+", "-", "*", "/", "**", "*-", "/-", "+-", "-+", "*+", "/+", ""]; // permitted operators plus "" to count that out
  for (var i = 0; i < equationArray.length; i++) {
    if (permitted.includes(equationArray[i]) === false ) {
       return false;
      }
    }
    return true;
}

function clearResult() {
    result = 0;
    equation = "";
    updateDOM("result", result);
    updateDOM("equation", 0);
}

function clearLast() {
  var lastDigit = equation[equation.length - 1];
  if (lastDigit === "+" || lastDigit === "-" || lastDigit === "*" || lastDigit === "/") {
    equation = equation.slice(0, equation.length -1);
  } else {
    var operators = /[\/\+\-\*]/g; // To match all arithmetic operators
    var tempArray = equation.split(operators);
    var lastElementLength = tempArray[tempArray.length -1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  isEmpty();
}

function isEmpty() {
  if (equation.length === 0) {
      updateDOM("equation", 0);
  } else {
      updateDOM("equation", equation);
  }
}

function updateDOM(elementID, input) {
    document.getElementById(elementID).innerHTML = "<p>" + input + "</p>";
}
