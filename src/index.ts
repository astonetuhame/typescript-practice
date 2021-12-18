//Basic Types
let id: number = 5  //number
let company: string = 'Tuhame Astone'   //string
let isPublished: boolean = true  //boolean
let x: any = 'Hello'   //any type can be assigned
let ids: number[] = [1, 2, 3, 4]  //array of only numbers
let arr: any[] = [1, 2, 3, true]  //array of any type

// Tuple
let person: [number, string, boolean] = [1, 'hi', false]
// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
]

// Union - hold more than one type
let pid: string | number = 22

// Enum - define set of named constants either numeric or string
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Right)


// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}
// Object definition two
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

// Type Assertion
let cid: any = 1
//let customerId = <number> cid
// OR
let customerId = cid as number

//Functions 
function addNum(x: number, y: number): number {
    return x + y
}
console.log(addNum(1, 2))
// union function
function log(message: string | number): void {
    console.log(message)
}
log(1)

// Interfaces - cant be used with primitives or unions
interface UserInterface {
    readonly id: number,  //readonly cant be modified
    name: string,
    age?: number //optional property
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}
// Interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
console.log(add(5, 6))

// Interfaces with classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}
// base class
class Person1 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is registered`
    }
}
// subclass
class Employee extends Person1 {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(1, "Taj", 'mechanic')
console.log(emp.register())

// Classes
class Person {
    id: number
    name: string
    private age: number   // only accessible from within the class
    protected gender: string  //only accessible within the class and classes that extend it

    constructor(id: number, name: string, age: number, gender: string) {
        this.id = id
        this.name = name
        this.age = age
        this.gender = gender
    }

    register() {
        return `${this.name} is registered`
    }
}
const a = new Person(1, 'Astone', 34, 'male')
//console.log(a.gender)
console.log(a.register())
const b = new Person(1, 'Angel', 24, 'female')

// Generics - placehold the types 
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['tom', 'john', 'alex'])

