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
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
class ClassA {
    print() {
        console.log(`ClassA.print() called`);
    }
}
class ClassB {
    print() {
        console.log(`ClassB.print() called`);
    }
}
class ClassC {
    print() {
        console.log(`ClassC.print() called`);
    }
}
function printClass(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
let classC = new ClassC();
printClass(classA);
printClass(classB);
printClass(classC);
