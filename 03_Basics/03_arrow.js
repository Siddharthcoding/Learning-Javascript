const user = {
    username: "Siddharth",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this keyword is used to refer current context(values)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sid"
// user.welcomeMessage()

// console.log(this);   // empty object in node environment as there is no global context
// but in browser Window is a global object so 'this' will return Window

// function tea(){
//     let userName = "Siddharth"
//     console.log(this.userName);    // 'this' not works in function it is for objects
// }

// tea()


// const tea = function(){
//     let userName = "Siddharth"
//     console.log(this.userName);
// }
// tea()

// const tea = () => {
//     let userName = "Siddharth"
//     console.log(this);             // returns empty object {}
// }
// tea()


// Arrow function:

// const addTwo = (num1, num2) => {
//     return num1 + num2             // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// when we use {} return keyword is required but when we use () it is not
// const addTwo = (num1, num2) =>  (num1 + num2)      // used in React

// to return an object wrap it in ()
const addTwo = (num1, num2) =>  ({username: "Siddharth"})  

console.log(addTwo(3,4));


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(()