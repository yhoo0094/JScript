function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];

    var sum = 0;

    // numbers.forEach(function(val, idx, ary){ //(값, 인덱스, 배열)
    //     console.log(val, idx, ary);
    //     sum += val;
    // });

    numbers.forEach(callBackFunc);

    function callBackFunc(v, i, a) {
        sum += v;
    }

    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}