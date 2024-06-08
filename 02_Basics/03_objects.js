// singleton (using Constructor)
// Object.create 


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Siddharth",
    "full name": "Siddharth Kumar",   // can be accessed using [] only not . operator
    [mySym]: "mykey1",                // [] to use it as a symbol    
    age: 18,
    location: "Jamshedpur",
    email: "siddharth@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);          // mostly used
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "siddharth@microsoft.com"
// Object.freeze(JsUser)                    // changes will not propagate to object
JsUser.email = "siddharth@mamazon.com"
// console.log(JsUser);

JsUser.greeting  = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo  = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());