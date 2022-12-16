var item1 = { id: 1, name: "item" }
item1 = { id: 2 }

var objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

function printNestedObject(obj) {
    console.log("obj.nestedProperty.name = " + obj.nestedProperty.name)
}

printNestedObject(objectA)

console.log("calling printNestedObject")
printNestedObject({})
console.log("completed")