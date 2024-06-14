// Javascript has prototypal behaviour
// 'new', 'this', classes and prototypal inheritance is due to prototype

// Array -> Object -> null
// String ->Object -> null


function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2   // function is also an object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);  // 'this' context & prototype properties

function createUser(username, score){
    this.username = username
    this.score = score
}

// creating our own properties in prototype
createUser.prototype.increment = function(){
    // jisne call kiya uska score increase kro (current context)
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const person1 = new createUser("person1", 25)
const person2 = new createUser("person2", 45)

person1.printMe()
person2.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/