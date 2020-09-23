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

//let으로 변수 선언하면 같은 변수명 선언 불가능!
    // var num1 = 10;
    // var num1 = "hello";
    // console.log(num1);
    // var num1 = "재훈이 멍청이"
    
    // let num2 = 10;
    // num2 = 15;
    // console.log(num2);
    // const num3 = 10;
    // const num3 = "재훈이 멍청이";
    // const num3 = "재훈이는 사실 천재";
    // console.log(num3);

//object 타입 console에 출력하기
    let p1 = {
        name: "Hong",
        age: 20
    }
    let p2 = {
        name: "Park",
        age: 25
    }
    let p3 = {
        name: "Choi",
        age: 30
    }
    let persons = [p1, p2, p3];
    // persons.forEach(function(a, b, c){
    //     // console.log(a,b,c);
    //     console.log(a.name + ", " + a.age)
    // });

//object 배열 sort하기
    // persons.sort((a,b) => {
    //     return a.age - b.age;
    // });
    // persons.sort((a,b) => {
    //     if(a.name < b.name) return -1;
    //     else return 1;
    // });
    // persons.forEach((a,b,c) => {
    //     console.log(`value: ${a.name}, age: ${a.age}, index: ${b}`);
    // })

//숫자 배열 sort하기
    // numbers = [45, 38, 66, 92, 18, 100];
    // numbers.sort(function(a, b){
    //     return a - b;
    // });
    // numbers.forEach(function(a){
    //     console.log(a);
    // })

//숫자 배열에서 최소 값 가져오기
    // numbers = [45, 38, 66, 92, 18, 100];
    // numbers.sort(function(a, b){
    // return a - b;
    // });
    // console.log(numbers[0]);


    numbers = [45, 38, 66, 92, 18, 100];
    numbers.sort(function(a, b){
    return a - b;
    });
    let newNum = numbers.map((a,b,c) => {
        // console.log(`a: ${a}, b: ${b}, c: ${c}`)
        return a*b;
    })
    console.log(newNum);
    let theNew = newNum.filter((a,b,c) => {
        return a > 0;
    });
    console.log(theNew);
    // let anotherNew = theNew.reduce((a,b,c) => {
    //     console.log(`a: ${a}, b: ${b}, c: ${c}`)
    //     return (a + b)/2;
    // }, 0); // => 초기값으로 0을 줬음
    let anotherNew = theNew.reduce((a,b,c) => {
        console.log(`a: ${a}, b: ${b}, c: ${c}`)
        if(a < b) {
            return b;
        } else {
            return a;
        }
    }, 0); // => 초기값으로 0을 줬음
    console.log(anotherNew);
