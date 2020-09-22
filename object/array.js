var students = [];



students.push("김현동");  //새로운 요소를 배열의 제일 마지막에 추가
// console.log("students[0] : " + students[0]);

students[1] = "김도은";
// console.log("students[1] : " + students[1]);

students.unshift("김다희"); //새로운 요소를 배열의 제일 앞에 추가
// console.log("students[0] : " + students[0]);



//배열에서 값 제거하기
    // students.pop(); //배열의 제일 마지막 값을 제거
    // students.shift(); //배열의 제일 앞의 값을 제거

    // console.log("바뀐 배열")
    // for(stu of students) {
    //     console.log(stu)
    // }

//splice
    // students.splice(1,1,"이광호"); //splice(index,갯수,값) index 값에서 갯수 만큼 값을 넣음
    // students.splice(1,0,"이광호"); //index 1에 이광호 추가
    // students.splice(1,2,"이광호"); //index 1에서 2개를 지우고 이광호 추가
    // students.splice(1)//index 1이후로 다 제거
    // students.splice(1,0,"이광호", "동광희"); //값을 여러개씩 넣을 수도 있다.

//slice
    console.log("-----------slice-------------------")
    var newStud = students.slice(1, 3); //slice(시작index, 끝index) => 끝 index는 포함 X
    for(student of newStud) {
        console.log(student);
    }

//sort
    students.sort();//정렬 기능

var numbers = [4, 6, 2, 9, 1, 10, 100];
numbers.sort(function(a, b) {
    console.log(a, b);
    return a - b; //음수면 오름차순, 양수면 내림차순
});
for(num of numbers) {
    console.log(num)
}


console.log("----------------현재 배열---------------")
for(stu of students) {
    console.log(stu)
}