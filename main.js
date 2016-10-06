// TO DO LIST
// 1. Find workaround for JS rounding issue
// 2. Print error message if equation input is totally nonsensical


document.addEventListener('DOMContentLoaded', start);

function start () {
    var buttons = document.getElementsByTagName("button");
    // console.log(buttons);
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", getButton);
    }
}

var equation = "";
var result = 0;

function getButton(evt) {
    if (evt.target.id === "AC") {
        clearResult();
    } else if (evt.target.id === "CE") {
        clearLast();
    } else if (evt.target.id === "equals") {
        calculateResult();
    } else {
        equation += evt.target.value;
        console.log(equation);
        document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
    }
    // console.log(evt.target.value);
}

function calculateResult() {
    var illegalExpression = /[\/\*][\/\*]/;
    if (equation.match(illegalExpression) !== null && equation.match(illegalExpression) != "**") {
        result = "Illegal!!";
    } else {
        result = eval(equation);
    }
    console.log(result);
    document.getElementById("result").innerHTML = "<p>" + result + "</p>";
    equation = "";
    equation = result;
}

function clearResult() {
    result = 0;
    equation = "";
    document.getElementById("result").innerHTML = "<p>" + result + "</p>";
    document.getElementById("equation").innerHTML = "<p>0</p>";
    console.log(result);
}

function clearLast() {
  var lastDigit = equation[equation.length - 1];
  if (lastDigit === "+" || lastDigit === "-" || lastDigit === "*" || lastDigit === "/") {
    equation = equation.slice(0, equation.length -1);
    document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  } else {
    var operators = /[\/\+\-\*]/g; // To match all arithmetic operators
    var tempArray = equation.split(operators);
    var lastElementLength = tempArray[tempArray.length -1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
}
