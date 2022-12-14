import inquirer from 'inquirer'

var version = `es6`;
console.log(`Hello ${version} TypeScript`);

var  myString: string = `this is a string`;

var myBoolean: boolean = true;
var myNumber: number = 1234;
var myStringArray: string[] = [`first`, `second`, `third`];

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

// type inference
var inferredString = "This is a string";
var inferredNumber = 1;

// inferredNumber = inferredString;

var nameIdObject = { name: "myName", id: 1, print() {}};
nameIdObject = {id: 2, name: "anotherName", print() {}};
// nameIdObject = {id: 3, name: "third name"}

var obj1 = { id: 1, print() {}};
var obj2 = { id: 2, print() {}, select() {}};

obj1 = obj2;
// obj2 = obj1;

// function signature and void
function calculate(a: number, b: number, c: number): number {
    return (a * b) + c
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);
// console.log(`calculate() = ${calculate("3", "2", "1")}`);
// var returnedValue: string = calculate(3, 2, 1);

// functions that do not return a value
function printString(a:string): void {
    console.log(a);
}
// var returnedValue: string = printString("this is a string")

inquirer.prompt([
    {
        name: "first_name",
        message: "what is your name ?"
    }
]).then(answers => {
    console.log(`you answered: ${answers.first_name}`)
})

