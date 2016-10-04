document.addEventListener('DOMContentLoaded', start);

function start () {
    var equals = document.getElementById("equals");
    equals.addEventListener("click", calculateResult);

    var clear = document.getElementById("AC");
    clear.addEventListener("click", clearResult);

    var seven = document.getElementById("seven").value;
    console.log("seven is " + seven);


    // var buttons = document.getElementsByTagName("button");
    // buttons.addEventListener("click", initializeButtons);
}


function initializeButtons () {
    alert("This is working")
}


var equation = "2+2+2+2";

function calculateResult() {
    var result = 0;
    console.log(result);
    result = eval(equation);
    console.log(result);
}

function clearResult() {
    var result = 0;
    console.log(result);
}
