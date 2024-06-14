// let myName = "Siddharth    "

// console.log(myName.trueLength);


let myHeros = ["Spiderman", "Thor"]

let heroPower = {
    Thor: "hammer",
    Spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

// inserting a property into object
Object.prototype.siddharth = function(){
    console.log(`siddharth is present in all objects`);
}

Array.prototype.heySid= function(){
    console.log(`Sid says hello`);
}

// heroPower.siddharth()
// myHeros.siddharth()
// myHeros.heySid()
// heroPower.heySid()   // only available for arrays


// Inheritance

const User = {
    name: "Siddharth",
    email: "sid@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport  // can access properties of teaching support
}

Teacher.__proto__ = User

// modern syntax

// Teaching support can access properties of teacher
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Siddharth     "

String.prototype.trueLength = function(){
    console.log(`${this}`);   // jisne call kiya uska reference
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Javascript    ".trueLength()
"Java".trueLength()