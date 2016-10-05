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
        //clear last value function
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
    result = eval(equation);
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
