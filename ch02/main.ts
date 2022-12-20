var item2: any = { id: 1, name: "item 1"};
item2 = { id: 2};

// rewrite the previous snippet using explicit casting.
var item3 = <any>{ id: 1, name: "item"};
item3 = { id: 2};

// another variant of the casting technique
var item4 = { id: 1, name: "item"} as any;
item4 = { id: 2}

// the let keyword
var index: number = 0;
if (index == 0) {
    var index: number = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);

// let keyword, refactor using let
let index2: number = 0;
if (index2 == 0) {
    let index2: number = 2;
    console.log(`index2 = ${index2}`);
}
console.log(`index2 = ${index2}`);

// const values
const constValues = "this should not be changed";
// constValues = "updated"; -- this would generate an error

// Union type
function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
} 

printObject(1);
printObject("string value");

// type guards
function addWithTypeGuard(
    arg1: string | number, 
    arg2: string | number) {

        if (typeof arg1 === "string") {
            // arg1 is treated as a string
            console.log(`arg1 is of type string`);
            return arg1 + arg2;
        }

        if (typeof arg1 === "number" && typeof arg2 === "number") {
            // both args are numbers
            console.log(`arg1 and arg2 are numbers`);
            return arg1 + arg2;
        }

        console.log(`default return treat both as strings`)
        return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`)
console.log(` 1, 2 = ${addWithTypeGuard(1, 2)}`)
console.log(` 1, "2" = ${addWithTypeGuard(1, "2")}`)

// type aliases
type StringOrNumber = "string" | "number"

function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
    return arg1.toString() + arg2.toString()
}

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`Enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

checkDoorState(DoorState.Open)
checkDoorState(DoorState.Closed)

enum DoorStateSpecificValues {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}


// string enums
enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed",
};
console.log(`OPEN = ${DoorStateString.OPEN}`);


// const enums
const enum DoorStateConst {
    Open = 10,
    Closed = 20,
}
console.log(`const Closed =  ${DoorStateConst.Open}`);

// undefined
let array = ["123", "456", "789"];

delete array[0]

for (let i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i])
}

function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined) {
        console.log(`invalid array element`);
    } else {
        console.log(`valid array element : ${arrElement}`);
        
    }
}

// null
function printValues(a: number | null) {
    console.log(`a = ${a}`);
}
printValues(1)
printValues(null)

// conditional expression
const value: number = 10;
const message: string = value > 10 ? "Value is larger than 10" : "value is 10 or less";
console.log(message);

var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

function printNestedObject(obj: any) {
    if (obj != undefined && obj.nestedProperty != undefined && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log("name not found or undefined")
    }
}

function printNestedObjectOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log("name not found or undefined")
    }
}

printNestedObject(objectA)

console.log("calling printNestedObject")
printNestedObjectOptionalChain({})
console.log("completed");

printNestedObjectOptionalChain(undefined)
printNestedObjectOptionalChain({
    aProperty: "another property",
})
printNestedObjectOptionalChain({
    nestedProperty: {
        name: null
    }
})
printNestedObjectOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
})

function nullishCheck(a: number | undefined | null) {
    console.log(`a: ${a ?? `undefined or null`}`);
}

nullishCheck(1)
nullishCheck(null)
nullishCheck(undefined)

function testNullOperand(a: number, b: number | null | undefined) {
    let addResult = a + (b ?? 0);
}

// console.log(`lValue = ${lValue}`)
var lValue = 2;


// definite assignment assertion
var globalString: string;

setGlobalString("This string is set");

console.log(`globalString = ${globalString!}`)

function setGlobalString(value: string) {
    globalString = value;
}

// object
let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);
// printObjectType("this is a string")

let a: any = "test";
let aNumber: number = 2;
aNumber = a;


let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = <number>u;

// never
// function alwaysThrows(): never {
//     throw new Error("this will always throw")
//     return -1
// }

// alwaysThrows()

// NEVER AND SWITCH
enum AnEnum {
    FIRST,
    SECOND
}

function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST:
            return "First Case";
        case AnEnum.SECOND:
            return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue;
}

// object spread
let firstObj: object = { id: 1, name: "firstObj"};
let secondObj: object = {...firstObj};

console.log(`secondObj: ${JSON.stringify(secondObj)}`);

// combine multiple objects together
let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 }

let obj3 = { ...nameObj, ...idObj }
console.log(`obj3 = ${JSON.stringify(obj3)}`)

// object precedence
let objPrec1: object = { id: 1, name: "obj1 name" }
let objPrec2: object =  { id: 1001, desc: "obj2 description" }

let objPrec3 = { ...objPrec1, ...objPrec2}
console.log(`objPrec3: ${JSON.stringify(objPrec3, null, 4)}`)

// spread with arrays
let firstArray = [1, 2, 3]
let secondArray = [3, 4, 5]

let thirdArray = [...firstArray, ...secondArray]
console.log(`third array: ${thirdArray}`)

// spread syntax can appear in any order
let objArray1 = [
    { id: 1, name: "first element"}
]

let objArray2 = [
    { id: 2, name: "second element"}
]

let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element"},
    ...objArray2
]
console.log(`objArray3: ${JSON.stringify(objArray3, null, 4)}`)

// Tuples
let tuple1: [string, boolean]
tuple1 = ["test", true]
console.log(tuple1)
// tuple1 = ["test"]

// tuple destructuring
// using simple array syntax
console.log(`tuple1[0]: ${tuple1[0]}`)
console.log(`tuple1[1]: ${tuple1[1]}`)

// 2nd way of destructuring a tuple
let [tupleString, tupleBoolean] = tuple1

console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

// optional tuple element
let tupleOptional: [string, boolean?]
tupleOptional = ["test", true]
tupleOptional = ["test"]

console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

// tuple and spread syntax
let tupleRest: [number, ...string[]]
tupleRest = [1]
tupleRest = [1, "string1"]
tupleRest = [1, "string1", "string2"]
tupleRest = [1, "string1", "string2", "string3"]

// object destructuring
let complexObject = {
    aNum: 1, 
    bStr: "name",
    cBool: true
}

let { aNum, bStr, cBool} = complexObject
console.log(`aNum: ${aNum}`)
console.log(`bStr: ${bStr}`)
console.log(`cBool: ${cBool}`)

console.log()
// rename variables during destructuring
let { aNum: objId, bStr: objName, cBool: isValid } = complexObject
console.log(`objId: ${objId}`)
console.log(`objName: ${objName}`)
console.log(`isValid: ${isValid}`)

// functions
// optional parameters
function concatValues(a: string, b?: string) {
    console.log(`a + b = ${a + b}`)
}

concatValues("first", "second")
concatValues("third")

// default parameters
function concatWithDefault(a: string, b: string = "default") {
    console.log(`a + b = ${a + b}`);
}
console.log();

concatWithDefault("first", "second")
concatWithDefault("third")

// Rest parameters
function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
        
    }
}

testArguments("1")
testArguments(10, 20)

// function signatures as parameters
function myCallback(text: string): void {
    console.log(`myCallback called with : ${text}`)
}

function withCallbackArg(
    message: string,
    callbackFn: (text: string) => void
) {
    console.log(`withCallbackArg called, message : ${message}`)
    callbackFn(`${message} from withCallbackArg`)
    
}

withCallbackArg("initial text", myCallback)
// withCallbackArg("text", "this is not a function")

// function overrides
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any){
    return a + b
}

add("first", "second")
add(1, 2)
// add(true, false)

// Literals
type AllowedStringValues = "one" | "two" | "three"
type AllowedNumericValues = 1 | 20 | 65535

function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
    console.log(`called with : ${input}`)
}

withLiteral("one")
withLiteral("two")
withLiteral("three")
withLiteral(65535)

withLiteral("four")
withLiteral(2)

