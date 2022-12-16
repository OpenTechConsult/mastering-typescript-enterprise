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
