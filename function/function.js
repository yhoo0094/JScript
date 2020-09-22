console.log("여기여기...");

sum(10,20); //hoisting으로 함수가 아래에 선언되어도 알아서 호출해 준다.

function sum(num1, num2) {
    console.log(num1 + " + " + num2 + " = " + (num1+num2));
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}

function concat(str1, str2) {
    return str1 + str2;
}

var numbers = [3,4,2,8,7]
function arySum(){
    var sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}

var mySum = function() {
    var sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}

function setBackgroundColor(element) {
    element.style.background = "aqua";
    element.style.color = "green";
}