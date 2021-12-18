"use strict";
//Basic Types
let id = 5; //number
let company = 'Tuhame Astone'; //string
let isPublished = true; //boolean
let x = 'Hello'; //any type can be assigned
let ids = [1, 2, 3, 4]; //array of only numbers
let arr = [1, 2, 3, true]; //array of any type
// Tuple
let person = [1, 'hi', false];
// Tuple Array
let employee;
employee = [
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
];
// Union - hold more than one type
let pid = 22;
// Enum - define set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 1,
    name: 'John'
};
// Object definition two
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }
// Type Assertion
let cid = 1;
//let customerId = <number> cid
// OR
let customerId = cid;
//Functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// union function
function log(message) {
    console.log(message);
}
log(1);
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(5, 6));
// base class
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
// subclass
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, "Taj", 'mechanic');
console.log(emp.register());
// Classes
class Person {
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const a = new Person(1, 'Astone', 34, 'male');
//console.log(a.gender)
console.log(a.register());
const b = new Person(1, 'Angel', 24, 'female');
// Generics - placehold the types 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['tom', 'john', 'alex']);
