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
    var illegalExpression = /[\/\*][\/\*]/; // matches two characters: each is either * or /
    var twoPlusOrMinus = /(\+\+|\-\-)/ // matches two pluses together OR two minuses together
    var alsoIllegal = /[\+\-][\*\/]/; // matches two characters; first is + or -, second is * or /
    if ( (illegalExpression.test(equation) && equation.match(illegalExpression) != "**") || alsoIllegal.test(equation) ) {
        result = "Illegal!!";
    }
    else if (twoPlusOrMinus.test(equation)) {
        result = "Javascript don't like it";
    }
    else {
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
    // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  } else {
    var operators = /[\/\+\-\*]/g; // To match all arithmetic operators
    var tempArray = equation.split(operators);
    var lastElementLength = tempArray[tempArray.length -1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
}

function clearLast() {
  var lastDigit = equation[equation.length - 1];
  if (lastDigit === "+" || lastDigit === "-" || lastDigit === "*" || lastDigit === "/") {
    equation = equation.slice(0, equation.length -1);
    // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  } else {
    var operators = /[\/\+\-\*]/g; // To match all arithmetic operators
    var tempArray = equation.split(operators);
    var lastElementLength = tempArray[tempArray.length -1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  isEmpty();
}

function isEmpty() {
    if (equation.length === 0) {
      document.getElementById("equation").innerHTML = "<p>" + 0 + "</p>";
  } else {
      document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  }
}
