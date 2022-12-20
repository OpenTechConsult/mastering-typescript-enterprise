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

// console.log("calling printNestedObject")
// printNestedObject({})
// console.log("completed")

console.log("aValue = " + aValue)
var aValue = 1
console.log("aValue = " + aValue)

function testArguments() {
    for (var i = 0; i < arguments.length; i++) {
        console.log("arguments[" + i + "] = " + arguments[i])
    }
}

testArguments(1, 2)
testArguments("first", "second", "third")

// callback functions in js
var myCallback = function (text) {
    console.log("my callback called with " + text)
}

function withCallbackArg(message, callbackfn) {
    console.log('withCallback called, message : ' + message)
    callbackfn(message + "from withCallback")
}

withCallbackArg("initial text", myCallback)