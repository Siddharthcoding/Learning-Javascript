const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5          // can't be overwritten
// console.log(Math.PI);

const mynewObject = {
    name: "ginger",
    price: 100,
    isAvailable: true,

    order: function(){
        console.log("Some issue");
    }
}

console.log(Object.getOwnPropertyDescriptor(mynewObject, "name"));

Object.defineProperty(mynewObject, "name", {
    // writable: false,
    enumerable: false  // can't iterate on name
})

console.log(Object.getOwnPropertyDescriptor(mynewObject, "name"));

for (let [key, value] of Object.entries(mynewObject)) {  // to iterate object
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
