interface IIdName {
    id: number;
    name: string;
}

// interface with optional properties
interface IOptional {
    id: number;
    name?: string;
}

interface IWeakType {
    id?: number;
    name?: string;
}

let idObject: IIdName = {
    id: 2,
    name: "This is a name"
}

// define objects based on IOptional interface
let optionalId: IOptional = {
    id: 1
}

let optionalIdName: IOptional = {
    id: 2,
    name: "optional name"
}

// let weak,TypeNoOverlap: IWeakType = {
//     description: "a description"
// }

// the 'in' operator
interface IIdNameIn {
    id: number;
    name: string;
}

interface IDescrValue {
    descr: string;
    value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }

    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`)
    }
}

printNameOrValue({
    id: 1,
    name: "nameValue"
})

printNameOrValue({
    descr: "description",
    value: 2
})

interface IPerson {
    id: number;
    name: string;
}

type PersonPropertyName = keyof IPerson

function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`)
}

getProperty("id", { id: 1, name: "firstName"})
getProperty("name", { id: 2, name: "secondName"})
// getProperty("telephone", { id: 3, name: "thirdName"})

// classes
class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.id = ${this.id}`);
        
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();

class ClassA implements IPrint {
    print(): void {
        console.log(`ClassA.print() called`)
    }
}

class ClassB implements IPrint {
    print(): void {
        console.log(`ClassB.print() called`)
    }
}

class ClassC {
    print(): void {
        console.log(`ClassC.print() called`)
    }
}

interface IPrint {
    print(): void;
}

function printClass(a: IPrint) {
    a.print();
}

let classA = new ClassA();
let classB = new ClassB();
let classC = new ClassC();

printClass(classA);
printClass(classB);
printClass(classC);