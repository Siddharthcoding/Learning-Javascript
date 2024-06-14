// Object literal

const user = {
    username: "Siddharth",
    loginCount: "10",
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);   // current context (parent function)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);        // global context

// Constructor function (new) = multiple instances from an object

function User(username, loginCount, isLoggedIn){
    this.username = username  // LHS is variable, RHS is passed parameter
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    // return this    // implicitly defined (optional)
}

// const userOne = User("Siddharth", 12, true)
// const userTwo = User("Human", 11, false)    // overwrites value of userOne

const userOne = new User("Siddharth", 12, true)  // creates separate instances
const userTwo = new User("Human", 11, false)

console.log(userOne.constructor);  // reference to object itself
// console.log(userTwo);

/* 
1. when 'new' kewyword is used an empty object is created called instance
2. then a constructor function is called due to 'new'keyword which packs all 
   the arguments of the object
3. all the arguments are injected into 'this' keyword
4. we recieve it in a function
*/