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
        // console.log(equation);
        updateDOM("equation", equation);
        // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
    }
}

function calculateResult() {
    if (illegalExpression(equation) === false) {
      updateDOM("result", "Illegal!");
    }
    // var illegalExpression = /[\/\*][\/\*]/; // matches two characters: each is either * or /
    // var twoPlusOrMinus = /(\+\+|\-\-)/ // matches two pluses together OR two minuses together
    // var alsoIllegal = /[\+\-][\*\/]/; // matches two characters; first is + or -, second is * or /
    // if ( (illegalExpression.test(equation) && equation.match(illegalExpression) != "**") || alsoIllegal.test(equation) ) {
    //     result = "Illegal!!";
    // }
    // else if (twoPlusOrMinus.test(equation)) {
    //     result = "Javascript don't like it";
    // }
    else {
        result = eval(equation);
        updateDOM("result", result)
    }
    equation = "";
    equation = result;
    // console.log(result);
    // document.getElementById("result").innerHTML = "<p>" + result + "</p>";
}

function illegalExpression(equation) {
  var equationArray = equation.split(/\d{1,}/g); // This returns an array of just the operators
  console.log(equationArray);
  var permitted = ["+", "-", "*", "/", "**", "*-", "/-", "+-", "-+", "*+", "/+", ""]; // permitted operators plus "" to count that out
  console.log(permitted);
  for (var i = 0; i < equationArray.length; i++) {
    if (permitted.includes(equationArray[i]) === false ) {
       return false;
       console.log("false");
      }
      console.log(equationArray[i]);
    }
    return true;
    console.log("true");
  // does equation array contain anything not in permitted???
  // IF item in equationArray does not equal anything in permitted - return false
}


//   function correctExpression () {
//     var operationArray = equation.split(/\d{1,}/g).filter(function(el) {return el.length != 0});
//     var allowedOperations = ["+-", "-+", "**", "*+", "*-", "/-", "/+", "+", "-", "*", "/"];
//     return operationArray.every(function isLegal(element) { return allowedOperations.indexOf(element) > -1  });
// }

function clearResult() {
    result = 0;
    equation = "";
    updateDOM("result", result);
    updateDOM("equation", 0);
    // document.getElementById("result").innerHTML = "<p>" + result + "</p>";
    // document.getElementById("equation").innerHTML = "<p>0</p>";
    // console.log(result);
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
      // document.getElementById("equation").innerHTML = "<p>" + 0 + "</p>";
  } else {
      updateDOM("equation", equation);
      // document.getElementById("equation").innerHTML = "<p>" + equation + "</p>";
  }
}

function updateDOM(elementID, input) {
    document.getElementById(elementID).innerHTML = "<p>" + input + "</p>";
}
