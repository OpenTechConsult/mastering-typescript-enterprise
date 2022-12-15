"use strict";
var item2 = { id: 1, name: "item 1" };
item2 = { id: 2 };
// rewrite the previous snippet using explicit casting.
var item3 = { id: 1, name: "item" };
item3 = { id: 2 };
// another variant of the casting technique
var item4 = { id: 1, name: "item" };
item4 = { id: 2 };
// the let keyword
var index = 0;
if (index == 0) {
    var index = 2;
    console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
// let keyword, refactor using let
let index2 = 0;
if (index2 == 0) {
    let index2 = 2;
    console.log(`index2 = ${index2}`);
}
console.log(`index2 = ${index2}`);
// const values
const constValues = "this should not be changed";
// constValues = "updated"; -- this would generate an error
// Union type
function printObject(obj) {
    console.log(`obj = ${obj}`);
}
printObject(1);
printObject("string value");
// type guards
function addWithTypeGuard(arg1, arg2) {
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
    console.log(`default return treat both as strings`);
    return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(` 1, 2 = ${addWithTypeGuard(1, 2)}`);
console.log(` 1, "2" = ${addWithTypeGuard(1, "2")}`);
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
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
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
var DoorStateSpecificValues;
(function (DoorStateSpecificValues) {
    DoorStateSpecificValues[DoorStateSpecificValues["Open"] = 3] = "Open";
    DoorStateSpecificValues[DoorStateSpecificValues["Closed"] = 7] = "Closed";
    DoorStateSpecificValues[DoorStateSpecificValues["Unspecified"] = 256] = "Unspecified";
})(DoorStateSpecificValues || (DoorStateSpecificValues = {}));
// string enums
var DoorStateString;
(function (DoorStateString) {
    DoorStateString["OPEN"] = "Open";
    DoorStateString["CLOSED"] = "Closed";
})(DoorStateString || (DoorStateString = {}));
;
console.log(`OPEN = ${DoorStateString.OPEN}`);
console.log(`const Closed =  ${10 /* DoorStateConst.Open */}`);
// undefined
let array = ["123", "456", "789"];
delete array[0];
for (let i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i]);
}
function checkAndPrintElement(arrElement) {
    if (arrElement === undefined) {
        console.log(`invalid array element`);
    }
    else {
        console.log(`valid array element : ${arrElement}`);
    }
}
// null
function printValues(a) {
    console.log(`a = ${a}`);
}
printValues(1);
printValues(null);
// conditional expression
const value = 10;
const message = value > 10 ? "Value is larger than 10" : "value is 10 or less";
console.log(message);
// Optional chaining
var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
};