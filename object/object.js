//변수에 object 바로 넣어버리기
let p1 = {name: "Hong", age:30}

//객체 만들기
class Person {
    //생성자
    constructor(name, age) {
        this._name = name; //'_'는 private의 의미(밖으로 필드명을 노출시키지 않기 위해 사용)
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age){
        this._age = age;
    }
}

let p2 = new Person("Park", 30);
p2.name = "Choi";
p2.age = 25;
console.log(`name: ${p2.name}, age: ${p2.age}`);
let p3 = new Person("Kim", 22);

//함수로 객체 만들기
function Student(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
}

let s1 = Student("Park",3,10);
let s2 = Student("Hong",4,11);
let s3 = Student("Hwang",5,12);

