"use strict";
let idObject = {
    id: 2,
    name: "This is a name"
};
// define objects based on IOptional interface
let optionalId = {
    id: 1
};
let optionalIdName = {
    id: 2,
    name: "optional name"
};
function printNameOrValue(obj) {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`);
    }
}
printNameOrValue({
    id: 1,
    name: "nameValue"
});
printNameOrValue({
    descr: "description",
    value: 2
});
function getProperty(key, value) {
    console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
// getProperty("telephone", { id: 3, name: "thirdName"})
// classes
class SimpleClass {
    print() {
        console.log(`SimpleClass.print() called`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.print();
